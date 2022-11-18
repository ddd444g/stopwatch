const time = document.getElementById("time");
const start = document.getElementById("start");
const reset = document.getElementById("reset");


$(function() {
  
  // リスタートの時に現在の経過時間を保持しておくため
  let carrentMs = 0;
  
  // スタート押した時
  $('#start').click(function() {
    // スタート押したらスタート押せなくする。
    $('#start').prop('disabled', true); 
    // ストップ復活
    $('#stop').prop('disabled', false);
    
    
    let startMs = Date.now();
    // 開始時間から経過時間をひく
    startMs -= carrentMs;
    
    timerId = setInterval( function() {
      const nowMs =Date.now();
      
      // 現在の経過時間
      carrentMs = nowMs - startMs;
      
      // m秒
      const ms = carrentMs % 1000; 
      // 秒
      const s = Math.floor(carrentMs / 1000) % 60;
      // 分
      const m = Math.floor(carrentMs / 1000 / 60) % 60;
      
      const h = Math.floor(carrentMs / 1000 / 60　/60) % 60;
      
      time.textContent = `${h}:${m}:${s}.${ms}`;
    }, 10);
    
  });
  
  
  // ストップ押した時
   $('#stop').click(function() {
    // ストップ封印
    $('#stop').prop('disabled', true);
    // スタート、リセット復活
     $('#start').prop('disabled', false);
     $('#reset').prop('disabled', false);
     
    // タイマーを止める
     clearInterval(timerId);
  });
  
  
  // リセット押した時
   $('#reset').click(function() {
    $('#start').prop('disabled', false);
    $('#stop').prop('disabled', true);
    $('#reset').prop('disabled', true);
    // 元に戻す
    time.textContent = '0:0:0.000';
    // 経過時間をリセット
    carrentMs = 0;
  });
  
  
});