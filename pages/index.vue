<template>
  <div class="flex flex-col">
    <div class="bg-purple-dark flex-1" style="border-radius: 0px 0px 40px 40px;">
      <div class="container flex flex-col">
        <div class="flex justify-between items-center mb-8">
          <p class="font-semibold text-2xl text-white">Covid-19</p>
          <div class="flex justify-between items-center bg-white h-10 px-2" style="border-radius: 50px; width: 7.25rem;">
            <img class="rounded-full w-8" src="@/assets/images/countries/il.svg" />
            <p class="font-semibold text-sm text-purple-darker">IL</p>
            <!-- prettier-ignore -->
            <svg class="text-purple-dark w-3" viewBox="0 0 11 8">
              <path
                d="M5.33437 8C5.10745 7.99886 4.88362 7.94721 4.67914 7.84881C4.47465 7.75041 4.29464 7.60773 4.15215 7.43111L0.409927 2.89778C0.191255 2.62486 0.0536478 2.296 0.0127866 1.94868C-0.0280746 1.60136 0.0294535 1.24955 0.178816 0.933334C0.299953 0.658512 0.497636 0.424367 0.748255 0.258865C0.998874 0.0933616 1.29183 0.00349605 1.59215 0H9.07659C9.37691 0.00349605 9.66987 0.0933616 9.92049 0.258865C10.1711 0.424367 10.3688 0.658512 10.4899 0.933334C10.6393 1.24955 10.6968 1.60136 10.656 1.94868C10.6151 2.296 10.4775 2.62486 10.2588 2.89778L6.51659 7.43111C6.37411 7.60773 6.19409 7.75041 5.9896 7.84881C5.78512 7.94721 5.5613 7.99886 5.33437 8Z"
                fill="#61688B"
              />
            </svg>
          </div>
        </div>
        <p class="font-semibold text-2xl text-white mb-4">Are you feeling sick?</p>
        <p class="text-sm text-white opacity-75 leading-6 mb-5">If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</p>
        <div class="flex justify-between mb-8">
          <button class="flex justify-center items-center h-12 w-5/12 bg-red text-white font-medium" style="border-radius: 50px;">
            <!-- prettier-ignore -->
            <svg class="fill-current text-white w-6 mr-4" x="0px" y="0px" viewBox="0 0 384 384">
              <g>
                <g>
                  <path
                    d="M362.667,266.667c-26.56,0-52.267-4.267-76.16-12.16c-7.36-2.347-15.787-0.64-21.653,5.227l-46.933,47.04 c-60.48-30.72-109.867-80.107-140.587-140.48l46.933-47.147c5.867-5.867,7.573-14.293,5.227-21.653 c-7.893-23.893-12.16-49.6-12.16-76.16C117.333,9.493,107.84,0,96,0H21.333C9.6,0,0,9.493,0,21.333 C0,221.653,162.347,384,362.667,384c11.84,0,21.333-9.493,21.333-21.333V288C384,276.16,374.507,266.667,362.667,266.667z"
                  />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <p>Call Now</p>
          </button>
          <button class="flex justify-center items-center h-12 w-5/12 bg-blue-dark text-white font-medium" style="border-radius: 50px;">
            <!-- prettier-ignore -->
            <svg class="fill-current text-white w-6 mr-4" x="0px" y="0px" viewBox="0 0 512 512">
              <g>
                <g>
                  <path
                    d="M440.164,71.836C393.84,25.511,332.249,0,266.737,0S139.633,25.511,93.308,71.836S21.473,179.751,21.473,245.263 c0,41.499,10.505,82.279,30.445,118.402L0,512l148.333-51.917c36.124,19.938,76.904,30.444,118.403,30.444 c65.512,0,127.104-25.512,173.427-71.836C486.488,372.367,512,310.776,512,245.263S486.488,118.16,440.164,71.836z M387.985,336.375L359.67,364.69c-23.456,23.456-90.011-5.066-148.652-63.708c-58.642-58.642-87.165-125.195-63.708-148.652 l28.314-28.314c5.864-5.864,15.372-5.864,21.236,0l35.393,35.393c5.864,5.864,5.864,15.372,0,21.236l-21.236,21.236 c20.599,43.487,55.615,78.502,99.102,99.101l21.236-21.236c5.864-5.864,15.372-5.864,21.236,0l35.393,35.393 C393.849,321.004,393.849,330.511,387.985,336.375z"
                  />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <p>Send SMS</p>
          </button>
        </div>
      </div>
    </div>
    <div class="container flex-1 flex flex-col">
      <p class="text-purple-darker text-xl font-semibold mt-4">Prevention</p>
      <div class="flex mt-6 overflow-x-auto">
        <div v-for="prevention in preventions" :key="prevention.id" class="flex flex-col flex-shrink-0 items-center w-1/3">
          <img :src="require(`@/assets/images/prevention/${prevention.id}.png`)" />
          <p class="text-center text-purple-darker text-sm font-semibold mt-2">{{ prevention.text }}</p>
        </div>
      </div>
    </div>
    <div class="flex-1 container flex items-center">
      <div class="flex items-center rounded-lg px-5" style="background: linear-gradient(269.6deg, #56549E 0.35%, #AEA1E6 101.48%);">
        <img class="mr-6" src="@/assets/images/prevention/do-your-own-test.png" />
        <div class="flex flex-col">
          <p class="text-white text-lg font-semibold mb-1">Do your own test!</p>
          <p class="text-white text-sm opacity-75">Follow the instructions to do your own test.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preventions: [
        {
          id: "1",
          text: "Aviud close contact"
        },
        {
          id: "2",
          text: "Clean your hands often"
        },
        {
          id: "3",
          text: "Wear a facemask"
        },
        {
          id: "3",
          text: "Wear a facemask"
        },
        {
          id: "3",
          text: "Wear a facemask"
        }
      ]
    };
  }
};
</script>
