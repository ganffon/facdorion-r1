const reportWebVitals = (onPerfEntry) => {
  // ✨ react 성능 측정 함수
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift : 페이지 로딩 중 레이아웃의 변동을 측정하는 지표
      getFID(onPerfEntry); // First Input Delay : 페이지 로딩 중 사용자의 첫 입력에 대한 응답 시간을 측정하는 지표
      getFCP(onPerfEntry); // First Contentful Paint : 페이지 로딩 중 브라우저에 컨텐츠의 첫 렌더링 시간을 측정하는 지표
      getLCP(onPerfEntry); // Largest Contentful Paint : 페이지 로딩 중 가장 큰 컨텐츠 요소의 렌더링 시간을 측정하는 지표
      getTTFB(onPerfEntry); // Time to First Byte : 서버로부터 첫 바이트를 수신하는 데 걸리는 시간을 측정하는 지표
    });
  }
};

export default reportWebVitals;
