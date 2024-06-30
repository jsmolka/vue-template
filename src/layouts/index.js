export function setupLayouts(routes) {
  return routes.map((route) => {
    if (route.children?.length > 0) {
      route.children = setupLayouts(route.children);
    }

    return {
      path: route.path,
      component: route.meta?.layout ?? (() => import('@/layouts/default/Index.vue')),
      children: [{ ...route, path: '' }],
    };
  });
}
