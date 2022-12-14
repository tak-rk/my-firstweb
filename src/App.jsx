import { useState } from 'react'
import './App.css'
import 'tw-elements';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className="navbar bg-base-100"><font></font>
        <div className="navbar-start"><font></font>
          <div className="dropdown"><font></font>
            <label tabIndex={0} className="btn btn-ghost btn-circle"><font></font>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg><font></font>
            </label><font></font>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>
              <li><a>実績</a></li><font></font>
              <li><a>メディア</a></li><font></font>
              <li><a>プロダクト</a></li><font></font>
            </ul><font></font>
          </div><font></font>
        </div><font></font>
        <div className="navbar-center"><font></font>
          <a className="btn btn-ghost normal-case text-xl">BLANCe</a><font></font>
        </div><font></font>
        <div className="navbar-end"><font></font>
          <button className="btn btn-ghost btn-circle"><font></font>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg><font></font>
          </button><font></font>
          <button className="btn btn-ghost btn-circle"><font></font>
            <div className="indicator"><font></font>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg><font></font>
              <span className="badge badge-xs badge-primary indicator-item"></span><font></font>
            </div><font></font>
          </button><font></font>
        </div><font></font>
      </div>



      <section class="flex flex-row h-screen ">
        
      {/*<!-- sidebar[start] -->*/}{/*}
      <nav class="w-1/4  overflow-hidden">
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">BALANCE</h2>

        <div class="relative mt-6">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>

          <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
        </div>

        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav>
              <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span class="mx-4 font-medium">実績</span>
              </a>

              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span class="mx-4 font-medium">アカウント</span>
              </a>

              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span class="mx-4 font-medium">メディア</span>
              </a>

              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span class="mx-4 font-medium">設定</span>
              </a>

              <hr class="my-6 border-gray-200 dark:border-gray-600" />

              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span class="mx-4 font-medium">プロダクト</span>
              </a>

              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span class="mx-4 font-medium">設定</span>
              </a>
          </nav>

          <div class="flex items-center px-4 -mx-2">
              <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://pbs.twimg.com/ext_tw_video_thumb/1297482780352188416/pu/img/gTGnj0HXfS7QAoVD.jpg" alt="avatar" />
              <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">username</h4>
          </div>
        </div>
      </div>
      </nav>/*}
      {/*<!-- sidebar[end] -->*/}

      
      
        

      

      {/*<!-- content[start] -->*/}
      <div class="w-full space-y-10">

        {/*<!-- Carousel [start] -->*/}
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://time-fun.fun/wp-content/uploads/2020/07/twitter-violet65-7.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://time-fun.fun/wp-content/uploads/2020/05/spring-twitter16-4.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://thumb.ac-illust.com/db/dbfd1d8f2a1ee579fc5bd6c324d67baf_t.jpeg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://pbs.twimg.com/media/ClUFfyiUkAAtWgD?format=jpg&name=large" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        {/*<!-- Carousel [end] -->*/}


          <section class="space-y-10 ">
            <div class='text-center bg-gray-100'>
              <p class="text-[46px] font-black">形にできなかったものを</p>
              <p class="text-[46px] font-black">形に致します</p> 
            </div>

            <div className='font-semibold text-left bg-gray-50'>
              <p class="">BLANCeは、実現したいブランド戦略・マーケティング戦略を、</p>
              <p class="">高いデザイン力/UX・UI実装力/効果的な演出で、</p>
              <p class="">クリエイティブやシステムに落とし込む、web・アプリ会社です。</p>
            </div> 

            <div className='font-medium text-left text-sm bg-gray-50'>
              <p class="">BLANCeは、実現したいブランド戦略・マーケティング戦略を、</p>
              <p class="">高いデザイン力/UX・UI実装力/効果的な演出で、</p>
              <p class="">クリエイティブやシステムに落とし込む、web・アプリ会社です。</p>
            </div> 

            <table class="border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th class="border border-slate-500">課題</th>
                  <th class="border border-slate-500">事業会社</th>
                  <th class="border border-slate-500">制作会社・コンサルティングファーム(デザイン・ブランディング・戦略）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="border border-slate-500">デザイン力・技術力</th>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・自社サイト・アプリの見栄えが時代に合っておらず、営業や採用の悪影響を与えている。</li>
                      <li> ・いいアイデア、表現を思いついたが、実現するデザイン力・技術力が社内に無い。</li>
                    </ul>
                  </td>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・戦略を策定したが、質の高いクリエティブに落とし込むことができない</li>
                      <li> ・効果的な演出をつけたいが、社内に実装できる人がいない。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th class="border border-slate-500">実行力</th>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・ブランド戦略は策定できたが、クリエイティブの品質が低いことによりブランドイメージを伝えられない。</li>
                      <li> ・クリエイティブの刷新が求められているが、どのようなものにしたらいいか分からない。</li>
                    </ul>
                  </td>
                  <td class="border border-slate-500"></td>
                </tr>
                <tr>
                  <th class="border border-slate-500">実行力</th>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・マーケティング領域へ振ることができる、デザイン・エンジニアリソースが不足している。</li>
                      <li> ・やりたい事がたくさんあるが、デザイン・エンジニアリソースが不足している。</li>
                    </ul>
                  </td>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・競合との差別化を図るためのデザイン / UX・UI /機能をリサーチしたいが、そのリソースが無い。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th class="border border-slate-500">コンペ勝率</th>
                  <td class="border border-slate-500"></td>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・動くプロトタイプが欲しいが、時間がなくてつくることができない。</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 class="text-left text-[30px] font-bold bg-gray-100">- ソリューション</h2>
            {/*<!-- Right Area2[start] -->*/}
            <div class="flex flex-col">
              <div class="flex">
                <div class="w-1/4 ">
                  <div class="flex flex-col space-y-10 text-[50px]">
                    <p class="bg-gray-100">1</p>
                    <p class="bg-gray-100">2</p>
                    <p class="bg-gray-100">3</p>
                    <p class="bg-gray-100">4</p>
                  </div>
                </div>
                <div class="w-full space-y-12">
                  <div>
                    <p class="font-bold border-b-4 boder-black ">web制作</p>
                    <p>お客様の目的に合わせて、</p>
                    <p>・ブランディング視点（お客様がユーザーに与えたい印象・体験を得られるコンテンツ）</p>
                  </div>
                  <div>
                    <p class="font-bold border-b-4 boder-black">機能・UI・ビジュアルの部分開発（web、アプリ）</p>
                    <p>実装の難しいデータビジュアライゼーション / 3D / UX・UI / モーショングラフィクス等</p>
                    <p>を、コンテンツ全体はもちろん、一部分の開発も可能です。</p>
                  </div>
                  <div>
                    <p class="font-bold border-b-4 boder-black">ゲーム開発（web、アプリ）</p>
                    <p>ゲームの企画、ロジックの実装が可能です。</p>
                  </div>
                  <div>
                    <p class="font-bold border-b-4 boder-black">プロダクト開発（webサービス・アプリ)</p>
                    <p>情報を提供するサイト・アプリではなく、入出金管理サービス / 情報可視化ツール /</p>
                    <p>ECサイト / SNSなど、ユーザーに機能を提供するサイト・アプリを開発が可能です。</p>
                  </div>
                </div>
                  
              </div>
            </div>



            <div className="collapse"><font></font>
              <input type="checkbox" className="peer" /> <font></font>
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"><font></font>
                クリック<font></font>
              </div><font></font>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> <font></font>
                <p>こんにちは</p><font></font>
              </div><font></font>
            </div>
            





          </section>
      </div>
      {/*<!-- content[end] -->*/}


      

        
      </section>
      
    
      {/*<!-- Header[start] -->*/}
      {/*}
      <header class="flex justify-start items-center  h-32 my-5   font-bold text-[46px] ">BALNCE</header>
      {/*<!-- Header[end] -->*/}

      {/*<!-- MainContents[start] -->*/}
      {/*}
      <section class="flex flex-row h-screen">
      
        {/*<!-- Left Area[start] -->*/}
        {/*}
        <nav class="w-1/4  overflow-hidden">
            <h1>Left Area</h1>
            <ul class="p-4">
                <li>
                    <h2 class="text-xl font-bold text-black sm:text-orange-600 md:text-black border-b-2 border-black">トップ</h2>
                    <ul class="p-4 pl-5 space-y-10">
                        <li><a href="" class="hover:text-orange-600">実績</a></li>
                        <li><a href="" class="hover:text-orange-600">メディア</a></li>
                        <li><a href="" class="hover:text-orange-600">プロダクト</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        
        {/*<!-- Left Area[end] -->*/}

        {/*<!-- Right Area[start] -->*/}
        {/*}
        <div class="w-full ">
          <h1>Right Area</h1>
          <section class="space-y-10 ">
            <div class='text-left bg-gray-100'>
              <p class="text-[46px] font-black">形にできなかったものを</p>
              <p class="text-[46px] font-black">形に致します</p> 
            </div>

            <div className='font-semibold text-left bg-gray-50'>
              <p class="">BLANCeは、実現したいブランド戦略・マーケティング戦略を、</p>
              <p class="">高いデザイン力/UX・UI実装力/効果的な演出で、</p>
              <p class="">クリエイティブやシステムに落とし込む、web・アプリ会社です。</p>
            </div> 

            <div className='font-medium text-left text-sm bg-gray-50'>
              <p class="">BLANCeは、実現したいブランド戦略・マーケティング戦略を、</p>
              <p class="">高いデザイン力/UX・UI実装力/効果的な演出で、</p>
              <p class="">クリエイティブやシステムに落とし込む、web・アプリ会社です。</p>
            </div> 

            <table class="border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th class="border border-slate-500">課題</th>
                  <th class="border border-slate-500">事業会社</th>
                  <th class="border border-slate-500">制作会社・コンサルティングファーム(デザイン・ブランディング・戦略）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="border border-slate-500">デザイン力・技術力</th>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・自社サイト・アプリの見栄えが時代に合っておらず、営業や採用の悪影響を与えている。</li>
                      <li> ・いいアイデア、表現を思いついたが、実現するデザイン力・技術力が社内に無い。</li>
                    </ul>
                  </td>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・戦略を策定したが、質の高いクリエティブに落とし込むことができない</li>
                      <li> ・効果的な演出をつけたいが、社内に実装できる人がいない。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th class="border border-slate-500">実行力</th>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・ブランド戦略は策定できたが、クリエイティブの品質が低いことによりブランドイメージを伝えられない。</li>
                      <li> ・クリエイティブの刷新が求められているが、どのようなものにしたらいいか分からない。</li>
                    </ul>
                  </td>
                  <td class="border border-slate-500"></td>
                </tr>
                <tr>
                  <th class="border border-slate-500">実行力</th>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・マーケティング領域へ振ることができる、デザイン・エンジニアリソースが不足している。</li>
                      <li> ・やりたい事がたくさんあるが、デザイン・エンジニアリソースが不足している。</li>
                    </ul>
                  </td>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・競合との差別化を図るためのデザイン / UX・UI /機能をリサーチしたいが、そのリソースが無い。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th class="border border-slate-500">コンペ勝率</th>
                  <td class="border border-slate-500"></td>
                  <td class="border border-slate-500">
                    <ul>
                      <li> ・動くプロトタイプが欲しいが、時間がなくてつくることができない。</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 class="text-left text-[30px] font-bold bg-gray-100">- ソリューション</h2>
            

            {/*<!-- Right Area2[start] -->*/}
            {/*}
            <div class="flex flex-col">
              <div class="flex">
                <div class="w-1/4 ">
                  <div class="flex flex-col space-y-10 text-[50px]">
                    <p class="bg-gray-100">1</p>
                    <p class="bg-gray-100">2</p>
                    <p class="bg-gray-100">3</p>
                    <p class="bg-gray-100">4</p>
                  </div>
                </div>
                <div class="w-full space-y-12">
                  <div>
                    <p class="font-bold border-b-4 boder-black ">web制作</p>
                    <p>お客様の目的に合わせて、</p>
                    <p>・ブランディング視点（お客様がユーザーに与えたい印象・体験を得られるコンテンツ）</p>
                  </div>
                  <div>
                    <p class="font-bold border-b-4 boder-black">機能・UI・ビジュアルの部分開発（web、アプリ）</p>
                    <p>実装の難しいデータビジュアライゼーション / 3D / UX・UI / モーショングラフィクス等</p>
                    <p>を、コンテンツ全体はもちろん、一部分の開発も可能です。</p>
                  </div>
                  <div>
                    <p class="font-bold border-b-4 boder-black">ゲーム開発（web、アプリ）</p>
                    <p>ゲームの企画、ロジックの実装が可能です。</p>
                  </div>
                  <div>
                    <p class="font-bold border-b-4 boder-black">プロダクト開発（webサービス・アプリ)</p>
                    <p>情報を提供するサイト・アプリではなく、入出金管理サービス / 情報可視化ツール /</p>
                    <p>ECサイト / SNSなど、ユーザーに機能を提供するサイト・アプリを開発が可能です。</p>
                  </div>
                </div>
                  
              </div>
            </div>
            {/*<!-- Right Area2[end] -->*/}
            




          {/*}
          </section>

        </div>

        {/*<!-- Right Area[end] -->*/}
    {/*}
    </section>
    {/*<!-- MainContents[end] -->*/}
      
      
      
      
      
      
      
      
      
      
      
      
      











      {/*
      <section class='space-y-10'>
        <div class="flex justify-around h-10">
          <div class='space-y-10'>
            <h1 class="text-left h-104 w-106 font-bold ">BALANCe</h1>
            <ul class="list-disc text-left space-y-2">
              <li >トップ</li>
              <li>実績</li>
              <li>メディア</li>
              <li></li>
            </ul>
          </div>

          <div class=''>
            <p class="text-[46px] font-bold">形にできなかったものを</p>
            <p class="text-[46px] font-bold">形に致します</p> 
          </div>     
        </div>
        

        <div className='font-semibold'>
          <p class="">BLANCeは、実現したいブランド戦略・マーケティング戦略を、</p>
          <p class="">高いデザイン力/UX・UI実装力/効果的な演出で、</p>
          <p class="">クリエイティブやシステムに落とし込む、web・アプリ会社です。</p>
        </div>

        <div className='span2  font-thin'>
          <p>スクリーン（web・アプリ）上で、実装できないUI,ビジュアル,アニメーションはありません。</p>
          <p>ただweb・アプリの実装するだけでなく、ブランディングにつながる演出を提供します。</p>
          <p>戦略・企画・制作のなかで、制作を強みとしています。</p>
        </div>
      </section>
      */}
      
      
    </div>
  )
}

export default App
