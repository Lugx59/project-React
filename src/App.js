import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import './App.css';

const images = [
  { url: process.env.PUBLIC_URL + '/img/kt1q01.png'},
  { url: process.env.PUBLIC_URL + '/img/kt1q02.png'},
  { url: process.env.PUBLIC_URL + '/img/kt1q03.png' },
  { url: process.env.PUBLIC_URL + '/img/kt1q04.png' },
  { url: process.env.PUBLIC_URL + '/img/kt1q05.png' }
];

const App = () => {
  return (
    <div className="App" style={{
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      
      {/* Spacer */}
      <div style={{ height: 30 }}>
        <div>
          <SimpleImageSlider
            width={451}
            height={172}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            slideDuration={0.5}
          />
        </div>
      </div>

      {/* Header, Carousel */}
      {/* <div
        style={{
          width: "32vw",
          minWidth: 250,
          height: 170,
          background: "green",
        }}
      /> */}

      {/* Spacer */}
      <div style={{ height: 142 }} />

      {/* Main1 */}
      <div style={{
          display: "flex",
          width: "31.5vw",
          minWidth: 452,
          height: 125,
          background: "#425572",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          {/* 고객이 만족하는 원큐 서비스 */}
          <div>
            <img src={process.env.PUBLIC_URL + '/img/Group-58.png'} style={{
              marginLeft:-130,
              marginTop:30
              }}/>

              {/* 하얀배경 */}
            <div>
              <img src={process.env.PUBLIC_URL + '/img/Group-36.png'} style={{
                position: "absolute",
                marginLeft:-210,
                marginTop:5
              }}/>
            </div>

            {/* 아름다운금융 뱅캐시 */}
              <div>  
                <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-9.png'} style={{
                  position: "absolute",
                  marginLeft:-155,
                  marginTop:30
                }}/></a>
              </div>

              {/* 하얀배경 */}
            <div>  
              <img src={process.env.PUBLIC_URL + '/img/Group-36.png'} style={{
                position: "absolute",
                marginLeft:0,
                marginTop:5
              }}/>
            </div>
              {/* 케이셀바이오 */}
              <div>  
                <a href="/ksellbio/ksellbio.html" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/img/Group-1.png'} style={{
                  position: "absolute",
                  marginLeft:35,
                  marginTop:35
                }}/>
                <img src={process.env.PUBLIC_URL + '/img/Group-10.png'} style={{
                  position: "absolute",
                  marginLeft:70,
                  marginTop:80
                }}/>
                </a>
              </div>
          </div>
      </div>
      
      {/* 하늘색이미지 */}
      <div style={{
        display: "flex",
        width: "31.5vw",
        minWidth: 452,
        height: 400,
        background: "#D8E7F6",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
          {/* 하얀배경 */}
          <div>
            <img src={process.env.PUBLIC_URL + '/img/Group-36.png'} style={{
              position: "absolute",
              marginLeft:-97,
              marginTop:45
            }}/>
          </div>
          {/* 할부금융상품 */}
          <div>  
            <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-2.png'} style={{
              position: "absolute",
              marginLeft:-260,
              marginTop:65
            }}/>
            <img src={process.env.PUBLIC_URL + '/img/Group-11.png'} style={{
              position: "absolute",
              marginLeft:-260,
              marginTop:125
            }}/>
            </a>
          </div>
      </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:0,
          marginTop:-355
        }}/>
      </div>
      {/* 세한신용정보 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group.png'} style={{
          position: "absolute",
          marginLeft:20,
          marginTop:-330
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-17.png'} style={{
          position: "absolute",
          marginLeft:15,
          marginTop:-275
        }}/>
        </a>
      </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:105,
          marginTop:-355
        }}/>
      </div>
      {/* 법률상담 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Vector-5.png'} style={{
          position: "absolute",
          marginLeft:135,
          marginTop:-335
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-8.png'} style={{
          position: "absolute",
          marginLeft:135,
          marginTop:-273
        }}/>
        </a>
      </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:-210,
          marginTop:-245
        }}/>
      </div>
      {/* 휴대폰몰 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-20.png'} style={{
          position: "absolute",
          marginLeft:-180,
          marginTop:-220
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-7.png'} style={{
          position: "absolute",
          marginLeft:-180,
          marginTop:-165
        }}/>
        </a>
      </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:-105,
          marginTop:-245
        }}/>
      </div>
      {/* TV/인터넷 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-16.png'} style={{
          position: "absolute",
          marginLeft:-72,
          marginTop:-222
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-15.png'} style={{
          position: "absolute",
          marginLeft:-82,
          marginTop:-165
        }}/>
        </a>
      </div>
        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-36.png'} style={{
            position: "absolute",
            marginLeft:0,
            marginTop:-245
          }}/>
        </div>

        {/* 빈공간 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-4.png'} style={{
            position: "absolute",
            marginLeft:80,
            marginTop:-215
          }}/></a>
        </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:-210,
          marginTop:-135
        }}/>
      </div>
        {/* 큐마트 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-3.png'} style={{
          position: "absolute",
          marginLeft:-195,
          marginTop:-105
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-14.png'} style={{
          position: "absolute",
          marginLeft:-170,
          marginTop:-55
        }}/>
        </a>
      </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:-105,
          marginTop:-135
        }}/>
      </div>
        {/* 원큐여행사 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-12.png'} style={{
          position: "absolute",
          marginLeft:-85,
          marginTop:-110
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-13.png'} style={{
          position: "absolute",
          marginLeft:-85,
          marginTop:-55
        }}/>
        </a>
      </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:0,
          marginTop:-135
        }}/>
      </div>
        {/* 애니펫보험 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Vector-6.png'} style={{
          position: "absolute",
          marginLeft:17,
          marginTop:-100
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-6.png'} style={{
          position: "absolute",
          marginLeft:22,
          marginTop:-55
        }}/>
        </a>
      </div>
      {/* 하얀배경 */}
      <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
          position: "absolute",
          marginLeft:105,
          marginTop:-135
        }}/>
      </div>
        {/* 빈공간 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-5.png'} style={{
          position: "absolute",
          marginLeft:135,
          marginTop:-105
        }}/>
        </a>
      </div>
      
      {/* Main1 */}
      <div style={{
          display: "flex",
          width: "31.5vw",
          minWidth: 452,
          height: 125,
          background: "#425572",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          
        {/* 방송국 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-21.png'} style={{
            position: "absolute",
            marginLeft:-200,
            marginTop:30
          }}/>
          {/* 하얀배경 */}
          <div>  
              <img src={process.env.PUBLIC_URL + '/img/Group-36.png'} style={{
                position: "absolute",
                marginLeft:-210,
                marginTop:60
              }}/>
            </div>
            {/* 채널원톡 */}
            <div>  
              <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-65.png'} style={{
                position: "absolute",
                marginLeft:-150,
                marginTop:80
              }}/>
              <img src={process.env.PUBLIC_URL + '/img/Group-66.png'} style={{
                position: "absolute",
                marginLeft:-105,
                marginTop:145
              }}/>
              </a>
            <div>  
                {/* 하얀배경 */}
              <img src={process.env.PUBLIC_URL + '/img/Group-36.png'} style={{
                position: "absolute",
                marginLeft:0,
                marginTop:60
              }}/>
            </div>
              {/* 원톡매거진 */}
              <div>  
                <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-35.png'} style={{
                  position: "absolute",
                  marginLeft:50,
                  marginTop:85
                }}/>
                <img src={process.env.PUBLIC_URL + '/img/Group-41.png'} style={{
                  position: "absolute",
                  marginLeft:80,
                  marginTop:145
                }}/>
                </a>
              </div>
            </div>   
          </div>
        </div>

      {/* 하늘색이미지 */}
      <div style={{
        display: "flex",
        width: "31.5vw",
        minWidth: 452,
        height: 182,
        background: "#D8E7F6",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-36.png'} style={{
            position: "absolute",
            marginLeft:-96,
            marginTop:45
          }}/>
        </div>
          {/* 일간스포츠 */}
          <div>  
            <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-63.png'} style={{
              position: "absolute",
              marginLeft:-255,
              marginTop:90
            }}/>
            <img src={process.env.PUBLIC_URL + '/img/Group-43.png'} style={{
              position: "absolute",
              marginLeft:-315,
              marginTop:51
            }}/>
            </a>
          </div>
        </div>
        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:0,
            marginTop:-136
          }}/>
        </div>
        {/* HCTM선정 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-67.png'} style={{
            position: "absolute",
            marginLeft:25,
            marginTop:-110
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-52.png'} style={{
            position: "absolute",
            marginLeft:16,
            marginTop:-55
          }}/>
          </a>
        </div>
        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:105,
            marginTop:-136
          }}/>
        </div>
        {/* 채널원톡영상 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-60.png'} style={{
            position: "absolute",
            marginLeft:140,
            marginTop:-110
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-59.png'} style={{
            position: "absolute",
            marginLeft:120,
            marginTop:-55
          }}/>
          </a>
        </div>

      {/* Main1 */}
      <div style={{
          display: "flex",
          width: "31.5vw",
          minWidth: 452,
          height: 125,
          background: "#425572",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          
        {/* 1q 가족 서비스 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-149.png'} style={{
            marginLeft:-250,
            marginTop:30
          }}/>
          {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-165.png'} style={{
            position: "absolute",
            marginLeft:-210,
            marginTop:5
          }}/>
        </div>
          {/* 컨텐츠이용료 */}
          <div>  
            <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-159.png'} style={{
              position: "absolute",
              marginLeft:-204,
              marginTop:10
            }}/>
            <img src={process.env.PUBLIC_URL + '/img/Group-162.png'} style={{
              position: "absolute",
              marginLeft:-189,
              marginTop:19
            }}/>
            <img src={process.env.PUBLIC_URL + '/img/Group-161.png'} style={{
              position: "absolute",
              marginLeft:-190,
              marginTop:100
            }}/>
            <img src={process.env.PUBLIC_URL + '/img/Group-40.png'} style={{
              position: "absolute",
              marginLeft:-197,
              marginTop:195
            }}/>
            </a>
          </div>
        </div>
      </div>

      {/* 하늘색이미지 */}
      <div style={{
        display: "flex",
        width: "31.5vw",
        minWidth: 452,
        height: 182,
        background: "#D8E7F6",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:10,
            marginTop:-65
          }}/>
        </div>
        {/* 코인포인트몰 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-164.png'} style={{
            position: "absolute",
            marginLeft:-190,
            marginTop:-45
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-157.png'} style={{
            position: "absolute",
            marginLeft:-200,
            marginTop:15
          }}/>
          </a>
          </div>
        </div>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:0,
            marginTop:-247
          }}/>
        </div>
        {/* 1q가족 원가몰 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-163.png'} style={{
            position: "absolute",
            marginLeft:30,
            marginTop:-225
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-158.png'} style={{
            position: "absolute",
            marginLeft:10,
            marginTop:-167
          }}/>
          </a>
        </div>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:103,
            marginTop:-247
          }}/>
        </div>
        {/* 뱅고플클럽 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-111.png'} style={{
            position: "absolute",
            marginLeft:135,
            marginTop:-225
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-110.png'} style={{
            position: "absolute",
            marginLeft:125,
            marginTop:-167
          }}/>
          </a>
        </div>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:-104,
            marginTop:-137
          }}/>
        </div>
        {/* BCAC */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-118.png'} style={{
            position: "absolute",
            marginLeft:-104,
            marginTop:-120
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-116.png'} style={{
            position: "absolute",
            marginLeft:-69,
            marginTop:-55
          }}/>
          </a>
        </div>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:0,
            marginTop:-137
          }}/>
        </div>
        {/* BCAC가맹점 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-138.png'} style={{
            position: "absolute",
            marginLeft:25,
            marginTop:-110
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-50.png'} style={{
            position: "absolute",
            marginLeft:10,
            marginTop:-55
          }}/>
          </a>
        </div>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:103,
            marginTop:-137
          }}/>
        </div>
        {/* 퀸플카드 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-19.png'} style={{
            position: "absolute",
            marginLeft:85,
            marginTop:-190
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-117.png'} style={{
            position: "absolute",
            marginLeft:120,
            marginTop:-55
          }}/>
          </a>
        </div>

      {/* Main1 */}
      <div style={{
          display: "flex",
          width: "31.5vw",
          minWidth: 452,
          height: 125,
          background: "#425572",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          
        {/* 1q 브랜드 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-119.png'} style={{
            marginLeft:-10,
            marginTop:30
          }}/>
        </div>
          {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-165.png'} style={{
            position: "absolute",
            marginLeft:-180,
            marginTop:60
          }}/>
        </div>
        {/* 원큐그룹 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-166.png'} style={{
            position: "absolute",
            marginLeft:-230,
            marginTop:125
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-109.png'} style={{
            position: "absolute",
            marginLeft:-222,
            marginTop:250
          }}/>
          </a>
        </div>

         {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:-220,
            marginTop:60
          }}/>
        </div>
        {/* 퀸즈플레이스 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-139.png'} style={{
            position: "absolute",
            marginLeft:-260,
            marginTop:80
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-140.png'} style={{
            position: "absolute",
            marginLeft:-275,
            marginTop:145
          }}/>
          </a>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:-188,
            marginTop:60
          }}/>
        </div>
        {/* 퀸즈네일 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-115.png'} style={{
            position: "absolute",
            marginLeft:-155,
            marginTop:80
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-141.png'} style={{
            position: "absolute",
            marginLeft:-160,
            marginTop:145
          }}/>
          </a>
          </div>

          {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:-84,
            marginTop:60
          }}/>
        </div>
        {/* 퀸즈플라워 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-114.png'} style={{
            position: "absolute",
            marginLeft:-50,
            marginTop:95
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-113.png'} style={{
            position: "absolute",
            marginLeft:-45,
            marginTop:85
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-142.png'} style={{
            position: "absolute",
            marginLeft:-60,
            marginTop:145
          }}/>
          </a>
          </div>

        {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:-294,
            marginTop:168
          }}/>
        </div>
        {/* 파크애니몰 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-148.png'} style={{
            position: "absolute",
            marginLeft:-275,
            marginTop:210
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-147.png'} style={{
            position: "absolute",
            marginLeft:-270,
            marginTop:250
          }}/>
          </a>
          </div>

          {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:-188,
            marginTop:168
          }}/>
        </div>
        {/* 파크애니몰 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-54.png'} style={{
            position: "absolute",
            marginLeft:-155,
            marginTop:190
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-27.png'} style={{
            position: "absolute",
            marginLeft:-165,
            marginTop:250
          }}/>
          </a>
          </div>

            {/* 하얀배경 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-22.png'} style={{
            position: "absolute",
            marginLeft:-84,
            marginTop:168
          }}/>
        </div>
        {/* 파크애니몰 */}
        <div>  
          <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-24.png'} style={{
            position: "absolute",
            marginLeft:-54,
            marginTop:192
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-57.png'} style={{
            position: "absolute",
            marginLeft:-48,
            marginTop:198
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-55.png'} style={{
            position: "absolute",
            marginLeft:-44,
            marginTop:202
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-56.png'} style={{
            position: "absolute",
            marginLeft:-43,
            marginTop:218
          }}/>
          <img src={process.env.PUBLIC_URL + '/img/Group-25.png'} style={{
            position: "absolute",
            marginLeft:-70,
            marginTop:250
          }}/>
          </a>
          </div>
        </div>
      </div>

      {/* 하늘색이미지 */}
      <div style={{
        display: "flex",
        width: "31.5vw",
        minWidth: 452,
        height: 182,
        background: "#D8E7F6",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        
      </div>

      {/* Main1 */}
      <div style={{
          display: "flex",
          width: "31.5vw",
          minWidth: 452,
          height: 125,
          background: "#425572",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          
        {/* 동영상 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-120.png'} style={{
            marginLeft:-330,
            marginTop:50
          }}/>
        </div>
      </div>

      {/* 고객서비스 */}
      <div style={{
          display: "flex",
          width: "31.5vw",
          minWidth: 452,
          height: 125,
          background: "#A5A5A5",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          
        {/* 고객서비스 */}
        <div>
          <img src={process.env.PUBLIC_URL + '/img/Group-121.png'} style={{
            marginLeft:-295,
            marginTop:50
          }}/>
        </div>
      </div>

      {/* 고객서비스 */}
      <div style={{
        display: "flex",
        width: "31.5vw",
        minWidth: 452,
        height: 144,
        background: "#D8E7F6",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        {/* 회색배경 */}
        <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-125.png'} style={{
          position: "absolute",
          marginLeft:-20,
          marginTop:10
        }}/>
      </div>
      {/* 공지사항 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-143.png'} style={{
          position: "absolute",
          marginLeft:-45,
          marginTop:35
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-127.png'} style={{
          position: "absolute",
          marginLeft:-45,
          marginTop:90
        }}/>
        </a>
        </div>

        {/* 회색배경 */}
        <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-125.png'} style={{
          position: "absolute",
          marginLeft:-25,
          marginTop:10
        }}/>
      </div>
      {/* 지역본부 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-144.png'} style={{
          position: "absolute",
          marginLeft:-50,
          marginTop:40
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-126.png'} style={{
          position: "absolute",
          marginLeft:-50,
          marginTop:90
        }}/>
        </a>
        </div>

        {/* 회색배경 */}
        <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-125.png'} style={{
          position: "absolute",
          marginLeft:-30,
          marginTop:10
        }}/>
      </div>
      {/* 고객상담 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-145.png'} style={{
          position: "absolute",
          marginLeft:-52,
          marginTop:35
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-129.png'} style={{
          position: "absolute",
          marginLeft:-55,
          marginTop:90
        }}/>
        </a>
        </div>

         {/* 회색배경 */}
        <div>
        <img src={process.env.PUBLIC_URL + '/img/Group-125.png'} style={{
          position: "absolute",
          marginLeft:-35,
          marginTop:10
        }}/>
      </div>
      {/* 지역본부 */}
      <div>  
        <a href=""><img src={process.env.PUBLIC_URL + '/img/Group-146.png'} style={{
          position: "absolute",
          marginLeft:-60,
          marginTop:40
        }}/>
        <img src={process.env.PUBLIC_URL + '/img/Group-126.png'} style={{
          position: "absolute",
          marginLeft:-60,
          marginTop:90
        }}/>
        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
