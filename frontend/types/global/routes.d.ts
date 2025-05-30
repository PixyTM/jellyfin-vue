/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/artist/[itemId]': RouteRecordInfo<'/artist/[itemId]', '/artist/:itemId', { itemId: ParamValue<true> }, { itemId: ParamValue<false> }>,
    '/genre/[itemId]': RouteRecordInfo<'/genre/[itemId]', '/genre/:itemId', { itemId: ParamValue<true> }, { itemId: ParamValue<false> }>,
    '/item/[itemId]': RouteRecordInfo<'/item/[itemId]', '/item/:itemId', { itemId: ParamValue<true> }, { itemId: ParamValue<false> }>,
    '/library/[itemId]': RouteRecordInfo<'/library/[itemId]', '/library/:itemId', { itemId: ParamValue<true> }, { itemId: ParamValue<false> }>,
    '/metadata': RouteRecordInfo<'/metadata', '/metadata', Record<never, never>, Record<never, never>>,
    '/musicalbum/[itemId]': RouteRecordInfo<'/musicalbum/[itemId]', '/musicalbum/:itemId', { itemId: ParamValue<true> }, { itemId: ParamValue<false> }>,
    '/person/[itemId]': RouteRecordInfo<'/person/[itemId]', '/person/:itemId', { itemId: ParamValue<true> }, { itemId: ParamValue<false> }>,
    '/playback/music': RouteRecordInfo<'/playback/music', '/playback/music', Record<never, never>, Record<never, never>>,
    '/playback/video': RouteRecordInfo<'/playback/video', '/playback/video', Record<never, never>, Record<never, never>>,
    '/search': RouteRecordInfo<'/search', '/search', Record<never, never>, Record<never, never>>,
    '/series/[itemId]': RouteRecordInfo<'/series/[itemId]', '/series/:itemId', { itemId: ParamValue<true> }, { itemId: ParamValue<false> }>,
    '/server/add': RouteRecordInfo<'/server/add', '/server/add', Record<never, never>, Record<never, never>>,
    '/server/login': RouteRecordInfo<'/server/login', '/server/login', Record<never, never>, Record<never, never>>,
    '/server/select': RouteRecordInfo<'/server/select', '/server/select', Record<never, never>, Record<never, never>>,
    '/settings/': RouteRecordInfo<'/settings/', '/settings', Record<never, never>, Record<never, never>>,
    '/settings/apikeys': RouteRecordInfo<'/settings/apikeys', '/settings/apikeys', Record<never, never>, Record<never, never>>,
    '/settings/devices': RouteRecordInfo<'/settings/devices', '/settings/devices', Record<never, never>, Record<never, never>>,
    '/settings/logs-and-activity': RouteRecordInfo<'/settings/logs-and-activity', '/settings/logs-and-activity', Record<never, never>, Record<never, never>>,
    '/settings/server': RouteRecordInfo<'/settings/server', '/settings/server', Record<never, never>, Record<never, never>>,
    '/settings/subtitles': RouteRecordInfo<'/settings/subtitles', '/settings/subtitles', Record<never, never>, Record<never, never>>,
    '/settings/users/': RouteRecordInfo<'/settings/users/', '/settings/users', Record<never, never>, Record<never, never>>,
    '/settings/users/[id]': RouteRecordInfo<'/settings/users/[id]', '/settings/users/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/settings/users/new': RouteRecordInfo<'/settings/users/new', '/settings/users/new', Record<never, never>, Record<never, never>>,
    '/wizard': RouteRecordInfo<'/wizard', '/wizard', Record<never, never>, Record<never, never>>,
  }
}
