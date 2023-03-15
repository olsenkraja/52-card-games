<template>
  <div class="bg-slate-50">
    <div class="flex flex-col mx-auto min-h-screen">
      <div>
        <div class="max-w-6xl mx-auto w-full px-4 xl:px-0">
          <div class="flex justify-end mt-2">
            <div class="flex space-x-2">
              <LanguageSelector />
              <Logout />
            </div>
          </div>
        </div>
        <Menu />
        <div class="max-w-6xl mx-auto w-full px-4 xl:px-0">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
