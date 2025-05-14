<template>
  <div>
      <div class="card">
    <div class="card-inner">
      <!-- Front Side -->
      <div class="card-side card-front">
        <div class="flag">EU<span>ID</span></div>
        <div class="photo"></div>
        <div class="info">
          <div><span class="label">Name:</span> Jane Doe</div>
          <div><span class="label">Birthday:</span> 01/01/1990</div>
          <div><span class="label">Nationality:</span> European</div>
          <div><span class="label">ID No:</span> EU1234567</div>
        </div>
      </div>
      <!-- Back Side -->
      <div class="card-side card-back">
        <div class="signature">
          <span style="font-family: cursive; top: 10px; font-size: 17px; position: absolute; left: 0; right: 0; text-align: center;">Jane Doe</span>
        </div>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
        <div class="line4"></div>
        <div class="line5"></div>

        <div class="mrz">I&lt;EURDOE&lt;&lt;JANE&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>EU1234567&lt;9EUR9001017F&lt;&lt;&lt;&lt;&lt;6<br>NAME&lt;PRENAME&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
      </div>
    </div>
  </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
    /* 3D container */
    .card {
      perspective: 1000px;
    }

    /* Inner flipping panel */
    .card-inner {
      width: 350px;
      height: 220px;
      position: relative;
      transform-style: preserve-3d;
      animation: flip 3.2s ease-in-out forwards;
    }

    /* Common side styling */
    .card-side {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      backface-visibility: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      background: white;
    }

    /* Front specifics */
    .card-front {
      /* white on white – use inner elements */
    }

    /* Back specifics */
    .card-back {
      transform: rotateY(180deg);
      background: #fafafa;
    }

    /* EU stripe & text */
    .flag {
      height: 30px;
      background: #c9c9c9;
      display: flex;
      align-items: center;
      padding: 0 10px;
      color: #fff;
      font-family: sans-serif;
      font-weight: bold;
    }
    .flag span {
      margin-left: auto;
      font-size: 18px;
    }

    /* Photo placeholder */
    .photo {
      position: absolute;
      top: 50px;
      left: 20px;
      width: 80px;
      height: 100px;
      background: #ddd;
      border-radius: 4px;
    }

    /* Info text */
    .info {
      position: absolute;
      top: 50px;
      left: 120px;
      font-family: sans-serif;
      font-size: 14px;
      line-height: 1.6;
    }
    .info .label {
      font-weight: bold;
      width: 80px;
      display: inline-block;
    }

    /* Back design elements */
    .signature {
      position: absolute;
      bottom: 90px;
      right: 20px;
      width: 120px;
      height: 40px;
      border-bottom: 1px solid #000;
    }
    .line1 {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 140px;
      height: 15px;
      background: #ccc;
      border-radius: 8px;
    }

    .line2 {
      position: absolute;
      top: 40px;
      left: 20px;
      width: 100px;
      height: 15px;
      background: #ccc;
      border-radius: 8px;
    }
    .line3 {
      position: absolute;
      top: 60px;
      left: 20px;
      width: 100px;
      height: 15px;
      background: #ccc;
      border-radius: 8px;
    }
    .line4 {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 140px;
      height: 15px;
      background: #ccc;
      border-radius: 8px;
    }
    .line5 {
      position: absolute;
      top: 40px;
      right: 20px;
      width: 100px;
      height: 15px;
      background: #ccc;
      border-radius: 8px;
    }

    /* MRZ styling */
    .mrz {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 85px; /* Slightly increased height for two lines */
      background: #c3c3c3; /* Kept existing background color */
      color: #131313; /* Kept existing text color */
      font-family: 'OCR-B', 'Courier New', Courier, monospace; /* OCR-B is standard, Courier as fallback */
      font-size: 14px; /* Adjusted for two lines and character count */
      line-height: 1.8; /* Adjusted for two lines */
      text-align: left; /* MRZ is typically left-aligned */
      letter-spacing: 1.5px; /* Adjusted for better fit and appearance */
      padding: 5px 10px; /* Added padding for better text positioning */
      box-sizing: border-box;
      display: flex;
      justify-content: center;
    }


    /* Flip animation */
    @keyframes flip {
      from { transform: rotateY(0deg); }
      to   { transform: rotateY(180deg); }
    }
</style>