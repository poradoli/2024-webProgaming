const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  // GPS 버튼 처리
  const btnGetGPS = document.querySelector("#btnGetGPS");
  if (btnGetGPS) {
    btnGetGPS.addEventListener("click", function () {
      navigator.geolocation.getCurrentPosition(success, error, options);
    });
  } else {
    console.error("GPS 버튼을 찾을 수 없습니다.");
  }
  
  // sessionStorage 및 localStorage 처리
  const btnWrite = document.querySelector("#btnWrite");
  const btnRead = document.querySelector("#btnRead");
  
  if (btnWrite) {
    btnWrite.addEventListener("click", function () {
      sessionStorage.setItem("rememberID", "123456");
      console.log("Session storage에 데이터 저장 완료");
    });
  }
  
  if (btnRead) {
    btnRead.addEventListener("click", function () {
      const value = localStorage.getItem("rememberID");
      if (value) {
        console.log("Local storage에서 가져온 값:", value);
      } else {
        console.error("Local storage에 값이 없습니다.");
      }
    });
  }
  
  // 쿠키 처리
  const btnCookie = document.querySelector("#btnCookie");
  
  if (btnCookie) {
    btnCookie.addEventListener("click", function () {
      const day = 24 * 60 * 60 * 1000;
  
      // 쿠키 저장
      cookieStore
        .set({
          name: "cookie1",
          value: "cookie1-value",
          expires: Date.now() + day,
          domain: "example.com", // 필요한 경우 조정
        })
        .then(
          () => {
            console.log("쿠키 저장 성공");
          },
          (reason) => {
            console.error("쿠키 저장 실패:", reason);
          }
        );
    });
  } else {
    console.error("쿠키 버튼을 찾을 수 없습니다.");
  }
  
  const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

digestMessage(text).then((digestHex) => console.log(digestHex));

  