# [WIL] What I Learned this project 

## 단위 이해하기

1. em 
- 단위가 쓰여진 곳의 폰트 사이즈의 배수
- element 혹은 element의 부모의 폰트가 지정되어있지 않는다면 문서의 기본값이 기준이 됨

2. rem 
- 문서의 기본값의 배수
- 단위별 문서의 기본값 : 16px 1em 100% 12pt
- 문서의 기본값을 바꾸고 싶다면,,,
```CSS
    :root{
        font-size : 12px;
    }
```

3. viewport에 대응해서 크기를 지정하는 방법
    > vw, vh, vmin, vmax

- `%` 단위의 정의 : 부모가 만들어준 공간 안에서의 너비

- `vw, vh` : 무조건 화면(브라우저의 화면= 뷰포트)을 기준으로 하는 단위
```
    100vh 100vw : 뷰포트를 기준으로 화면의 100%로 사용하시오!라는 의미
    50vh 50vw : 뷰포트를 기준으로 화면의 50%로 사용하시오!라는 의미  
```
- `view port` : 화면 Display상의 표시 영역, 브라우저의 화면


✅ 요약
```
vh : 1/100th of the height of the viewport.
vw : 1/100th of the width of the viewport.
vmin : 1/100th of the minimum value between the height and the width of the viewport.
vmax : 1/100th of the maximum value between the height and the width of the viewport.
```


## 수평/수직 정렬하는 방법
1. margin auto 사용
- 수평정렬만 고려하는 경우 사용
- 인라인요소에서는 적용이 안됨

2. display flex 사용
```CSS
   display : flex; 
   justify-content : center;
   align-items : center;
```
- 수직/수평 정렬을 하고 싶은 부모 요소에 적용함
- 부모 요소의 width와 height를 기준으로 정렬하게 됨
- 주의 : 만약에 부모 요소 height가 없는 경우에는 요소안의 content양만큼만 height를 갖기때문에 마치 정렬이 안된것처럼 보일 수 있음 -> 부모요소의 height를 설정해주면 됨(ex. height: 100vh)  

3. position absolute 사용 **⭐추천**
```CSS
  position : absolute;  
  top : 50%
  left : 50%
  transform : translate(-50%, -50%);
```
- 특별한 기준이 없을 경우, 문서 전체를 기준으로 한가운데 정렬을 하게됨
- 특정 부모요소 안에서 가운데 정렬을 하고싶다면, 그 요소를 `position : relative`를 설정해주면 됨


## box-shadow
- syntax
box-shadow 
```
     x축   y축   blur(흐릿함) 그림자두께 그림자색깔
ex)  20px  30px  50px                   rgba(0,0,0,0.5);
    -20px -30px             👈 음수 설정 : 기본축의 반대방향
      0     0    50px       👈 그림자가 전방향으로 골고루 분산됨
```
- x축과 y축만 필수요소, 나머지는 옵션
- x축의 기본방향 : 오른쪽 / y축의 기본방향 : 아래
- 추가적인 옵션인 `inset`을 사용하면 그림자가 요소 안쪽에 생김


## transition  
- CSS속성을 변경할 때, **애니메이션 속도를 조절**하는 방법을 제공
- CSS속성을 변경할 때는 `transform`을 사용
- syntax
```
    transition: <property> <duration> <timing-function> <delay>;
```
- timing-function :  ease-in-out , linear 등등 속성이 어떻게 변할지를 말해주는 것
               		

## background

| property              | definition   | default     | option                                |
| :-------------------- | :----------- | :---------- | :------------------------------------ |
| background-color      | 배경색          | transparent |                                       |
| background-image      | 배경이미지        |             |                                       |
| background-repeat     | 배경이미지반복여부    | repeat      | repeat, repeat-x, repeat-y, no-repeat |
| background-position   | 배경이미지위치      | 0 0(왼쪽상단)   | (주로)center center                     |
| background-attachment | 배경이미지 스크롤 여부 | scroll      | scroll,fixed,local                    |
| background-size       | 배경이미지 크기     | auto        |

- syntax
    > 한 줄로 사용할 수 도 있지만, 각각의 특성별로 설정할 수 있음
```CSS
body {
  background:
     url(sweettexture.jpg)    /* image */
     top center or 200px 200px /* position / size */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     red;                     /* color */
}
```
- background-attachment
  - scroll : 배경이 요소에 고정되어 문서와 함께 스크롤됨
  - fixed : 뷰 포트에 따라 고정됨, 이미지가 가만히 있게 됨
  - local : 요소의 콘텐츠 위치를 상속받아 콘텐츠와 함께 스크롤됨
- background-position
  - 첫번째 : 수평 오프셋 / 두번째 : 수직 오프셋
  - right,left,top,bottom,center등을 적절히 조합하여 사용
  - CSS에서 사용되는 단위 사용 가능
- background-size
  - auto : 이미지의 원래크기 그대로 가져옴
  - cover : 배경영역이 다 덮히도록 이미지배율을 크게하여서 가져옴, 일부 이미지가 보이지 않을 수 있음
  - contain : content 영역 안쪽에 width와 height 둘다 가능한한 가장 큰 사이즈로 배경 이미지 크기를 조정
  - CSS에서 사용되는 단위로 width와 height를 설정 가능, 하나만 설정하면 그 값은 width가 되고 나머지는 auto도 됨
