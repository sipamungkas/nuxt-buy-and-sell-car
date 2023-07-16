export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.path.includes("profile")) {
    const user = useSupabaseUser();
    if (!user.value) {
      return navigateTo("/login");
    }
  }
});
