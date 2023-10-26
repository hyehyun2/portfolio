<template >
  <div>
    <div class="profile-content">
      <div class="img-container zoomIn animated">
        <img class="me" src="me.jpeg" alt="" style="width: 200px; margin-left: -15%; margin-top:2%;">
      </div>
      <h1><span style="font-weight: bold">김혜현</span>입니다.</h1>
      <h2><span style="color: #ff4d5a;">Hello</span>, World :)</h2>
      <div class="socialMedia animated fadeInUp">
        <a href="https://github.com/hyehyun2" target="_blank"><i class="fab fa-github"></i></a>
      </div>
    </div>

    <div>

    </div>

    <div class="info">
      <div class="info-item">
        <strong>이름 <br></strong> 김혜현👻
      </div>
      <div class="info-item">
        <strong>학력 <br></strong> 명지전문대학 정보통신공학과 졸업🧑‍🎓<br> 명지전문대학 정보통신공학과 전공심화 재학🧑‍🎓
      </div>
      <div class="info-item">
        <strong>취미 <br> </strong> 음악 감상🎵 <br> 베이킹🧁
      </div>
      <div class="info-item">
        <strong>자격증 <br> </strong> 리눅스마스터 2급📖 <br> 운전면허 1종 보통🚘
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");

.profile-content {
  position: absolute;
  top: 43%;
  left: 23%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 260px;
  margin-top: 5%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 15px gray;
}

.img-container {
  height: 190px;
  width: 150px;
  margin: 10% auto;
  display: block;
  overflow: hidden;
  text-align: center;
  animation-delay: 0.4s;
  border: 1px solid gray;
}

.card-content {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 600px;
}

.card-title {
  font-size: 15px;
}

h2 {
  font-weight: normal;
  font-size: 20px;
}

h1 {
  display: inline-block;
  font-weight: normal;
  font-size: 25px;
}

.info {
  font-size: 15px;
  float: right;
  margin-top: 18%;
  margin-right: 40%;
}

.info-item {
  margin-bottom: 10%;

}

.info-subtitle {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
}

@keyframes homeSkew {
  from {
    transform: translateY(50px) skewY(20deg);
  }

  50% {
    transform: translateY(0) skewY(20deg);
  }

  to {
    transform: skewY(0)
  }
}

@keyframes moveInright {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  80% {}

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.socialMedia {
  font-size: 25px;
  margin-top: 20px;
  margin: 10%;

  a {
    color: black;
    padding: 8px;
  }

  a:hover {
    color: #ff4d5a;
  }
}
</style>