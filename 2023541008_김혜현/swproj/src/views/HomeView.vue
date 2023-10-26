<template>
  <h2 class="top">요새 뜨고 있는 베이킹 Top 3</h2>
  <div class="lunc">
    <div class="lunchboximg">

      <img src="https://i.pinimg.com/originals/64/51/2e/64512e30d2a23c3fac69174af48d8075.jpg" class="casecake" alt="cake">
      <div class="lunchbox">
        <h3>도시락 케이크</h3>
      </div>
    </div>

  </div>


  <div class="saltimg">
    <img src="https://i.pinimg.com/564x/41/45/eb/4145eb4fe61ff37397a6cbf64f39ab46.jpg" class="cake" alt="cake">
  </div>
  <div class="salt">
    <h3>소금빵</h3>

  </div>

  <img src="https://i.pinimg.com/564x/d0/af/6c/d0af6cbbabefa4e7c625b4a22724fcda.jpg" class="cake" alt="cake">
  <h3>크로플</h3>
  <div class="more">
    <button class="btn1" @click="$router.push('/recipe')">더 많은 레시피 보러가기</button>
  </div>
</template>


<style>
.container div {
  display: inline-block;
  /* 가로로 나열하기 위해 block레벨 요소를 inline-block레벨로 전환 */
  width: 200px;
  /* 영역 크기 지정 안해주면 inline 레벨처럼 내용물 만큼만 차지하기 때문에 크기 지정 */
  height: 100px;
  /* 영역 크기 지정 안해주면 inline 레벨처럼 내용물 만큼만 차지하기 때문에 크기 지정 */
}

.btn1 {
  border: 0;
  outline: none;
  font-size: 15px;
  margin: 0px;
  background: #c9af7c;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
}

button.btn1:hover {
  color: white;
  background: #deb667;
}

.casecake {
  width: 35%;
  border-radius: 50%;
}

.cake {
  border-radius: 50%;
}

.lunchbox {
  float: auto;
}

.more {
  padding: 20px;
}
</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
