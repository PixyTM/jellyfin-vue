<template>
  <VSelect
    v-model="trackIndex"
    :clearable="type === 'Subtitle'"
    :placeholder="type === 'Subtitle' ? t('disabled') : undefined"
    density="comfortable"
    hide-details
    single-line
    class="text-truncate uno-text-capitalize"
    :items="selectItems">
    <template #selection="{ item }">
      {{ item.raw.selection }}
    </template>

    <template #item="{ item, props: templateProps }">
      <VListItem
        v-bind="templateProps"
        :title="item.raw.title"
        :subtitle="item.raw.subtitle">
        <template #prepend>
          <JIcon
            :class="item.raw.icon"
            class="uno-w-10" />
        </template>
      </VListItem>
    </template>
  </VSelect>
</template>

<script setup lang="ts">
import { ref, computed, watch, capitalize } from 'vue';
import type { MediaStream } from '@jellyfin/sdk/lib/generated-client';
import { useTranslation } from 'i18next-vue';
import { watchImmediate } from '@vueuse/core';
import { isNil } from '@jellyfin-vue/shared/validation';
import { getLocaleName } from '#/utils/i18n';

const { mediaStreams, type, defaultStreamIndex } = defineProps<{
  mediaStreams: MediaStream[];
  type: string;
  defaultStreamIndex?: number;
}>();
const emit = defineEmits<{
  input: [newIndex?: number];
}>();
const { t, i18next } = useTranslation();

/**
 * Audio layout to get related icon
 * @returns Icon name
 */
function getSurroundIcon(layout: string) {
  switch (layout) {
    case '2.0': {
      return 'i-mdi:surround-sound-2-0';
    }
    case '3.1': {
      return 'i-mdi:surround-sound-3-1';
    }
    case '5.1': {
      return 'i-mdi:surround-sound-5-1';
    }
    case '7.1': {
      return 'i-mdi:surround-sound-7-1';
    }
    default: {
      return 'i-mdi:surround-sound';
    }
  }
}

/**
 * Get track icons
 * @returns Optional icon to use for the track line in the v-select menu
 */
function getTrackIcon(
  track: MediaStream
) {
  if (type === 'Audio' && track.ChannelLayout) {
    return getSurroundIcon(track.ChannelLayout);
  }
}

/**
 * Parse track subtitles
 * @returns Optional subtitle to use for the track line in the v-select menu
 */
function getTrackSubtitle(track: MediaStream): string | undefined {
  if ((type === 'Audio' || type === 'Subtitle') && track.Language) {
    return capitalize(
      getLocaleName(track.Language, i18next.language)
      ?? `${t('unknown')} (${track.Language})`
    );
  } else if (type === 'Audio' || type === 'Subtitle') {
    return t('undefined');
  }
}

/**
 * Used to model the media stream index as a value and the potential strings
 *
 * @returns List of objects prepared for Vuetify v-select with the strings to display as "text" and index number as "value".
 */
const selectItems = computed(() =>
  mediaStreams.map(value => ({
    icon: getTrackIcon(value),
    selection: value.DisplayTitle ?? '',
    subtitle: getTrackSubtitle(value),
    title: value.DisplayTitle ?? '',
    value: value.Index
  }))
);

/**
 * Default index to use (null if none because of V-Select empty value)
 */
// eslint-disable-next-line unicorn/no-null
const trackIndex = ref<number | null>(defaultStreamIndex ?? mediaStreams.find(track => track.IsDefault)?.Index ?? null);

/**
 * Check if Type is Video or Audio and trackIndex is null then set trackIndex as this.selectItems[0].value
 */
if (
  (type === 'Video' || type === 'Audio')
  && isNil(trackIndex.value)
  && selectItems.value[0]
) {
  // eslint-disable-next-line unicorn/no-null
  trackIndex.value = selectItems.value[0].value ?? null;
}

watchImmediate(
  trackIndex,
  (newValue) => {
    emit('input', newValue ?? undefined);
  }
);

watch(
  () => defaultStreamIndex,
  (newValue) => {
    if (newValue !== trackIndex.value) {
      // eslint-disable-next-line unicorn/no-null
      trackIndex.value = newValue ?? null;
    }
  }
);
</script>
