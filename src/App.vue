<script setup></script>

<template>
  <div class="max-w-5xl my-0 mx-auto">
    <header class="mb-2.5 mt-7 flex items-center">
      <h1 class="font-bold mr-7">Quizes</h1>
      <input
        class="border-0 bg-inputColor p-2.5 rounded-sm"
        type="text"
        placeholder="Search..."
      />
    </header>
    <div class="options-container flex flex-wrap mt-10">
      <div class="card w-310 overflow-hidden mb-9 mr-5 cursor-pointer">
        <img
          class="w-full h-48 m-0"
          src="https://www.bwseducationconsulting.com/wp-content/uploads/2020/08/bws-maths-tutoring.jpg"
          alt="math image"
        />
        <div class="card-text py-0 px-2.5">
          <h2 class="font-bold">Math</h2>
          <p>15 questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}
</style>
