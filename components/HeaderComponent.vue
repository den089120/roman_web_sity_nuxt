<template>
  <header id="header">
    <h1 id="logo"><a href="#">AUTO-HELP</a></h1>
    <nav id="nav">
      <ul>
        <li><NuxtLink to="/">Домашняя страница</NuxtLink></li>
        <li>
          <a href="#">Панель админа</a>
          <ul>
            <li>
              <a href="#">Первая секция</a>
              <ul>
                <li><NuxtLink to="/FirstSection/ListComponent">Список секций</NuxtLink></li>
                <li><NuxtLink to="/FirstSection/AddComponent">Добавить</NuxtLink></li>
              </ul>
            </li>
            <li><a href="">Прикурить</a></li>
            <li><a href="">Переобуть калеса</a></li>
            <li>
              <a href="#">Заправка: выбор бензина \/</a>
              <ul>
                <li><a href="#">Дизель зимний</a></li>
                <li><a href="#">АИ-92</a></li>
                <li><a href="#">АИ-95</a></li>
                <li><a href="#">АИ-98</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="">О нас</a></li> <!-- elements.html-->
        <li><a href="#" class="button primary">Войти</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>