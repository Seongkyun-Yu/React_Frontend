# OMEGABOX 프로젝트

| [![omegabox_image](https://user-images.githubusercontent.com/15887982/89279029-d7ed4d80-d681-11ea-93de-7d3c7bf37cb3.gif)](https://www.youtube.com/watch?v=86waeamae5k) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                  _이미지 클릭시 YouTube로 연결됩니다_                                                                  |

<br>

2020년 6월 22일부터 7월 17일까지(업데이트 기간 제외) 진행한<br>
MEGABOX Clone 프로젝트입니다.<br>
www.omegabox.ga 에서 프로젝트를 확인할 수 있습니다.<br>

<br>

## Requirements

- 사용 기술<br>
  HTML5, CSS3, JS6+<br>
  React v.16<br>

- 라이브러리
  <details> 
    <summary>접기/펼치기 버튼</summary>
    <div markdown="1">
      React v.16<br>
      redux v.4.0.5<br>
      react-redux v.7.2.0<br>
      redux-saga v.1.1.3<br>
      redux-thunk v.2.3.0<br>
      react-router-dom v.5.2.0<br>
      axios v.0.19.2<br>
      node-sass v.4.14.1<br>
      bootpay-js v.3.2.6<br>
      http-proxy-middleware v.1.0.4<br>
      react-chartjs-2 v.2.9.0<br>
      react-cookies v.0.1.1<br>
      react-flatpickr v.3.10.1<br>
      react-google-login v.5.1.21<br>
      react-loading-skeleton v.2.1.1<br>
      react-naver-maps v.0.0.13<br>
      react-player v.2.5.0<br>
      react-slick v.0.26.1<br>
    </div>
  </details>

<br>

## Getting Started

<b>로그인과 결제기능에 사용되는 key 파일은 업로드 되지 않았습니다.
<br> 실행을 위해서는 ysungkyun@gmail.com으로 해당 파일을 요청하셔야 합니다.</b><br>

$ git clone https://github.com/OmegaBox/React_Frontend.git<br>
$ yarn install<br>
\$ yarn start<br>

<br>

## Development motivation

MEGABOX 홈페이지 제작을 통해 기존의 홈페이지 기능을 구현, 개선하고<br>

프론트와 백엔드 개발자의 협업을 통해 기획 및 커뮤니케이션 능력을 기르고자<br>

이번 프로젝트를 시작하였습니다.<br>

<br>

## Main Feature by Seongkyun

- 예매 날짜, 상영관, 영화 선택 기능
- JWT를 활용한 일반 로그인, 소셜 로그인 기능
- 전체 영화 리스트 페이지의 이미지 Lazy Loading 처리
- 가까운 영화관 기능
- Bootpay 모듈을 활용한 결제, 예매 취소 기능
- Naver Map을 이용한 상영관 지도 표시 기능
- S3, CloudFront, Route53, Amazon Certification을 이용한 배포 작업
- 전체 프로젝트에서 뭔가 안된다는 기능들 수정 & 업데이트

<br>

## Improvements to Megabox

- 페이지를 이동할 때마다 로딩창이 뜨지 않도록 상태 관리 처리
- 좌석 선택 페이지에서 브라우저 상의 뒤로가기 누를 시 선택 옵션이 사라지지 않게 만듦
- 한 번 검색했던 옵션은 Caching 처리를 통해 api 요청하지 않도록 함
- 극장 위치 정보 표시
- 선택 불가능한 날짜는 캘린더에 표시되지 않게 수정
- 선택 불가능한 날짜는 캘린더에 표시되지 않게 수정

<br>

## Bugfix & Refactoring history

2020-10-01 :

- refreshToken bugfix (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/334))

2020-09-30 :

- IE 11 지원 패치 (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/330))

2020-09-29 :

- api 주소 수정 (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/328))

2020-08-04 :

- 메인 페이지 검색기능 제작 (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/313))
- 예매내역 취소시 취소내역 갱신이 자동으로 안되는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/315))
- cookie 만료 옵션으로 명시적인 기간을 가지게 만듦 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/318))
- cookie 보안 옵션을 secure로 변경 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/318))
- React프로젝트가 HTTPS로 작동되게 변경 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/318))

2020-08-03 :

- 영화 코멘트의 영화제목이 특정 제목으로 고정되고 댓글 수가 특정 숫자로 고정 표기되는 버그 수정(유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/307))
- 새로고침하면 로그아웃 팝업 띄우는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/305))

2020-07-31 :

- 메인페이지에서 신규 오픈 극장 선택시 극장 위치 정보 페이지 이동 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))
- 마이페이지 로그인 체크를 한번만 하도록 고침 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))
- 마이페이지 새로고침시 내역이 보이지 않는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))
- 좌석 선택 페이지에서 select의 문자열이 크롬 외의 브라우저에서 중앙정렬 되지 않는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))

2020-07-30 :

- 팝업 모듈 리팩토링 (송치원 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/297))

2020-07-29 :

- 영화예매 페이지, 마이페이지에서 일정 시간 이후 로그인 체크가 안되는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/295))

2020-07-28 :

- 영화 리스트 이미지에 Lazy Loading 기능 추가 (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/292))

2020-07-25 ~ 2020-07-27:

- 영화 정보(지도) 표시 페이지 제작 (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/291))

2020-07-24 :

- 마이무비스토리에 리스트가 없을 경우 깨지는 버그 수정 (김규리 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/287))

2020-07-23 :

- HTML 코드 리팩토링 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/286))
- 이벤트 페이지 접속시 스크롤 가장 위로 올림 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/286))

2020-07-22 :

- 링크가 걸려 있지 않은 버튼들에 링크 추가 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/285))
- 영화 상세페이지 코멘트 부분의 모든 영화 제목이 #살아있다로 표기되는 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/285))
- 영화 상세페이지에서 작동하지 않는 무비포스트 탭 삭제 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/285))

- 폰트 임포트 방식 수정 (김규리 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/284))

2020-07-21 :

- 좋아요 버튼이 깨지는 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/283))

2020-07-20 :

- 무한 GPS요청 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/279))
- 메인페이지가 모바일에서 깨지는 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/280))
