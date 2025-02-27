import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<div class="container">
          <header></header>
          <section class="store-image">
              <img src="images/logo.png"/>
          </section>
          <section class="store-name">
              피자헛 홍대점
              <br/>
              <article class="emoticon-1">
                  <img src="images/emoticon-1.png"/>
                  시원하다
              </article>
              <article class="emoticon-2">
                  <img src="images/emoticon-1.png"/>
                  시원하다
              </article>
              <article class="emoticon-3">
                  <img src="images/emoticon-2.png"/>
                  푸짐한 양
              </article>
          </section>
          <div class="box1"></div>
          <section class="menu">
              <h3>각 영역을 선택하여 쉽게 편집하실 수
              있습니다
              </h3>
              <article class="tool">
                  <div class="phone_number">
                      <img src="images/icon-call.png"/>
                      <a href="tel:01012345678" target="_blank">010-1234-5678</a>
                  </div>
                  <div class="location">
                      <img src="images/icon-location.png"/>
                      <a href="https://map.naver.com/p/entry/place/1059570160?lng=126.9146825&lat=37.5546188&placePath=%2Fhome%3Fentry%3Dpll&c=15.00,0,0,0,dh" target="_blank">서울특별시 마포구 동교로 114</a>
                      <span>서울특별시 마포구 동교로 114</span>
                  </div>
                  <div class="time">
                      <img src="images/icon-clock.png"/>
                      <p>매일 11:00 - 23:00 / 22:30 라스트오더 - 매장별 상세 영업 시간은 상이할 수 있습니다.</p>
                      <span>매일 11:00 - 23:00 / 22:30 라스트오더 - 매장별 상세 영업 시간은 상이할 수 있습니다.</span>
                  </div>
                  <div class="web">
                      <img src="images/icon-web.png"/>
                      <a href="http://www.pizzahut.co.kr/" target="_blank">http://www.pizzahut.co.kr/</a>
                      <span>http://www.pizzahut.co.kr/</span>
                  </div>
                  <div class="eolluga">
                      <img src="images/icon-reels.png"/>
                      <a href="#none">얼루가 변경</a>
                  </div>
                  <div class="pay">
                      <img src="images/mdi-hand-coin-outline.png"/>
                      <a href="#none">후불 결제</a>
                  </div>
              </article>
          </section>
          <br/>
          <div class="box2"></div>
          <section class="navigation-bar">
              <article>
                  <ul>
                      <li class="home">
                          <a href="#none">
                              <img src="images/Icon-main.png"/>
                              <p>홈</p>
                          </a>
                      </li>
                      <li class="menu_management">
                          <a href="#none">
                              <img src="images/tabler-list.png"/>
                              <p>메뉴 관리</p>
                          </a>
                      </li>
                      <li class="review_management">
                          <a href="#none">
                              <img src="images/icon_review.png"/>
                              <p>리뷰 관리</p>
                          </a>
                      </li>
                      <li class="storytel_management">
                          <a href="#none">
                              <img src="images/arcticons-storytel.png"/>
                              <p>소식 관리</p>
                          </a>
                      </li>
                  </ul>
              </article>
          </section>
  </div>)
}
