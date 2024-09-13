<template>
  <UDashboardLayout>
    <UDashboardPanel
      id="layout"
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible
    >
      <UDashboardNavbar>
        <template #left>
          <UDropdown :items="matieres" :popper="{ placement: 'bottom-start' }">
            <UButton
              label="Navigation"
              trailing-icon="heroicons:chevron-down-20-solid"
              variant="solid"
              color="gray"
            />
          </UDropdown>
        </template>
        <template #right>
          <UColorModeButton />
        </template>
      </UDashboardNavbar>
      <UDashboardSidebar>
        <template #header>
          <UContentSearchButton label="Recherche..." />
        </template>
        <UDashboardSidebarLinks :links="links" />
        <template #footer>
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>
    <UDashboardPanel grow>
      <UDashboardNavbar>
        <template #left>
          breadcrumb
        </template>
      </UDashboardNavbar>
      <UDashboardPanelContent
        class="px-4 prose prose-primary dark:prose-invert max-w-none first:prose-h2:mt-0"
      >
        <slot />
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardLayout>
</template>

<script lang="ts" setup>
const matieres = [[{
  label: 'Accueil',
  to: '/',
}, {
  label: 'NSI',
  to: '/nsi',
}, {
  label: 'SNT',
  to: '/snt',
}], [{
  label: 'Articles',
  to: '/articles',
}]]

const links = [{
  id: 'home',
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
  tooltip: {
    text: 'Home',
    shortcuts: ['G', 'H']
  }
}, {
  id: 'inbox',
  label: 'Inbox',
  icon: 'i-heroicons-inbox',
  to: '/inbox',
  badge: '4',
  tooltip: {
    text: 'Inbox',
    shortcuts: ['G', 'I']
  }
}, {
  id: 'users',
  label: 'Users',
  icon: 'i-heroicons-user-group',
  to: '/users',
  tooltip: {
    text: 'Users',
    shortcuts: ['G', 'U']
  }
}, {
  id: 'settings',
  label: 'Settings',
  to: '/settings',
  icon: 'i-heroicons-cog-8-tooth',
  children: [{
    label: 'General',
    to: '/settings',
    exact: true
  }, {
    label: 'Members',
    to: '/settings/members'
  }, {
    label: 'Notifications',
    to: '/settings/notifications'
  }],
  tooltip: {
    text: 'Settings',
    shortcuts: ['G', 'S']
  }
}]
</script>

<style>

</style>