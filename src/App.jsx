import { useEffect,useState } from 'react'
import './App.css'
import 'tw-elements';



function App() { 
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div class=''>

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
        
      
      {/*<!-- content[start] -->*/}
      <div class="w-full space-y-10">

        <input type="text" placeholder="検索" className="input input-bordered input-accent w-full max-w-xs" />

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
            <div class='text-center '>
              <p class="text-[46px] font-black">形にできなかったものを</p>
              <p class="text-[46px] font-black">形に致します</p>            
            </div>

            <div className='font-semibold text-left '>
              <p class="">BLANCeは、実現したいブランド戦略・マーケティング戦略を、</p>
              <p class="">高いデザイン力/UX・UI実装力/効果的な演出で、</p>
              <p class="">クリエイティブやシステムに落とし込む、web・アプリ会社です。</p>
            </div> 

            <div className='font-medium text-left text-sm '>
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

            <h2 class="text-left text-[30px] font-bold ">- ソリューション</h2>


            <div className="flex w-full">
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-gray-100">1</div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                <p class="font-bold">web制作</p>
                お客様の目的に合わせて、・ブランディング視点（お客様がユーザーに与えたい印象・体験を得られるコンテンツ)
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-gray-100">2</div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                <p class="font-bold">機能・UI・ビジュアルの部分開発（web、アプリ）</p>
                実装の難しいデータビジュアライゼーション / 3D / UX・UI / モーショングラフィクス等を、コンテンツ全体はもちろん、一部分の開発も可能です
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-gray-100">3</div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                <p class="font-bold">ゲーム開発（web、アプリ）</p>
                ゲームの企画、ロジックの実装が可能です。
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center bg-gray-100">4</div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                <p class="font-bold">プロダクト開発（webサービス・アプリ)</p>
                情報を提供するサイト・アプリではなく、入出金管理サービス / 情報可視化ツール /ECサイト / SNSなど、ユーザーに機能を提供するサイト・アプリを開発が可能です。
              </div>
            </div>
            {/*<!-- Right Area2[start] -->*/}
            <div class="flex flex-col">
              <div class="flex">
                <div class="w-1/4 ">
                  <div class="flex flex-col space-y-10  text-[50px]">
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



            <footer className="footer p-10 ">
              <div>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p>BALANCe<br/>web制作会社</p>
              </div> 
              <div>
                <span className="footer-title">Social</span> 
                <div className="grid grid-flow-col gap-4">
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                  <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" checked />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                  </div>
                </div>
              </div>
            </footer>
            <progress className="progress w-56"></progress>
            
            <div class="sm:hidden">
              {/* component here */}
              <div className="btm-nav ">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </button>
                <button className="active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </button>
              </div>
            </div>





          </section>
      </div>
      {/*<!-- content[end] -->*/}


      

        
      </section>
      
    
 
      </div>  
    </div>
  )
  
  
  
  
}
export default App
