<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base ndarray statistical functions.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { covarmtk, cumax, cumin, dcovarmtk, dcumax, dcumaxabs, dcumin, dcuminabs, dmax, dmaxabs, dmaxabssorted, dmaxsorted, dmean, dmeankbn, dmeankbn2, dmeanli, dmeanlipw, dmeanors, dmeanpn, dmeanpw, dmeanstdev, dmeanwd, dmediansorted, dmidrange, dmin, dminabs, dminsorted, dmskmax, dmskmin, dmskrange, dnanmax, dnanmaxabs, dnanmean, dnanmeanors, dnanmeanpn, dnanmeanpw, dnanmeanwd, dnanmidrange, dnanmin, dnanminabs, dnanmskmax, dnanmskmin, dnanmskrange, dnanrange, drange, drangeabs, dstdev, dstdevch, dstdevpn, dstdevtk, dstdevwd, dstdevyc, dztest, dztest2, max, maxBy, maxabs, maxsorted, mean, meankbn, meankbn2, meanors, meanpn, meanpw, meanwd, mediansorted, midrange, midrangeBy, min, minBy, minabs, minsorted, mskmax, mskmaxabs, mskmidrange, mskmin, mskrange, nanmax, nanmaxBy, nanmaxabs, nanmean, nanmeanors, nanmeanpn, nanmeanwd, nanmidrange, nanmidrangeBy, nanmin, nanminBy, nanminabs, nanmskmax, nanmskmin, nanmskrange, nanrange, nanrangeBy, range, rangeBy, rangeabs, scovarmtk, scumax, scumaxabs, scumin, scuminabs, sdsmean, sdsmeanors, sdsnanmeanors, smax, smaxabs, smaxabssorted, smaxsorted, smean, smeankbn, smeankbn2, smeanli, smeanlipw, smeanors, smeanpn, smeanpw, smeanwd, smediansorted, smidrange, smin, sminabs, sminsorted, smskmax, smskmaxabs, smskmidrange, smskmin, smskrange, snanmax, snanmaxabs, snanmean, snanmeanors, snanmeanpn, snanmeanwd, snanmidrange, snanmin, snanminabs, snanmskmax, snanmskmin, snanmskrange, snanrange, srange, srangeabs, sstdev, sstdevch, sstdevpn, sstdevtk, sstdevwd, sstdevyc, stdev, stdevch, stdevpn, stdevtk, stdevwd, stdevyc, sztest, sztest2, variance, variancech, variancewd, ztest, ztest2 } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray@deno/mod.js';
```

#### ns

Namespace containing base ndarray statistical functions.

```javascript
var o = ns;
// returns {...}
```

The namespace exposes the following APIs:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`covarmtk( arrays )`][@stdlib/stats/base/ndarray/covarmtk]</span><span class="delimiter">: </span><span class="description">calculate the covariance of two one-dimensional ndarrays provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`cumax( arrays )`][@stdlib/stats/base/ndarray/cumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`cumin( arrays )`][@stdlib/stats/base/ndarray/cumin]</span><span class="delimiter">: </span><span class="description">compute the cumulative minimum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`dcovarmtk( arrays )`][@stdlib/stats/base/ndarray/dcovarmtk]</span><span class="delimiter">: </span><span class="description">calculate the covariance of two one-dimensional double-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dcumax( arrays )`][@stdlib/stats/base/ndarray/dcumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dcumaxabs( arrays )`][@stdlib/stats/base/ndarray/dcumaxabs]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum absolute value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dcumin( arrays )`][@stdlib/stats/base/ndarray/dcumin]</span><span class="delimiter">: </span><span class="description">compute the cumulative minimum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dcuminabs( arrays )`][@stdlib/stats/base/ndarray/dcuminabs]</span><span class="delimiter">: </span><span class="description">compute the cumulative minimum absolute value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmax( arrays )`][@stdlib/stats/base/ndarray/dmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmaxabs( arrays )`][@stdlib/stats/base/ndarray/dmaxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmaxabssorted( arrays )`][@stdlib/stats/base/ndarray/dmaxabssorted]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a sorted one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmaxsorted( arrays )`][@stdlib/stats/base/ndarray/dmaxsorted]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a sorted one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmean( arrays )`][@stdlib/stats/base/ndarray/dmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmeankbn( arrays )`][@stdlib/stats/base/ndarray/dmeankbn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeankbn2( arrays )`][@stdlib/stats/base/ndarray/dmeankbn2]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeanli( arrays )`][@stdlib/stats/base/ndarray/dmeanli]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dmeanlipw( arrays )`][@stdlib/stats/base/ndarray/dmeanlipw]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`dmeanors( arrays )`][@stdlib/stats/base/ndarray/dmeanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`dmeanpn( arrays )`][@stdlib/stats/base/ndarray/dmeanpn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dmeanpw( arrays )`][@stdlib/stats/base/ndarray/dmeanpw]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using pairwise summation.</span>
-   <span class="signature">[`dmeanstdev( arrays )`][@stdlib/stats/base/ndarray/dmeanstdev]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean and standard deviation of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmeanwd( arrays )`][@stdlib/stats/base/ndarray/dmeanwd]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray using Welford's algorithm.</span>
-   <span class="signature">[`dmediansorted( arrays )`][@stdlib/stats/base/ndarray/dmediansorted]</span><span class="delimiter">: </span><span class="description">compute the median value of a sorted one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmidrange( arrays )`][@stdlib/stats/base/ndarray/dmidrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmin( arrays )`][@stdlib/stats/base/ndarray/dmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dminabs( arrays )`][@stdlib/stats/base/ndarray/dminabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dminsorted( arrays )`][@stdlib/stats/base/ndarray/dminsorted]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a sorted one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmskmax( arrays )`][@stdlib/stats/base/ndarray/dmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a one-dimensional double-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`dmskmin( arrays )`][@stdlib/stats/base/ndarray/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a one-dimensional double-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`dmskrange( arrays )`][@stdlib/stats/base/ndarray/dmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional double-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`dnanmax( arrays )`][@stdlib/stats/base/ndarray/dnanmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmaxabs( arrays )`][@stdlib/stats/base/ndarray/dnanmaxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmean( arrays )`][@stdlib/stats/base/ndarray/dnanmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmeanors( arrays )`][@stdlib/stats/base/ndarray/dnanmeanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnanmeanpn( arrays )`][@stdlib/stats/base/ndarray/dnanmeanpn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dnanmeanpw( arrays )`][@stdlib/stats/base/ndarray/dnanmeanpw]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnanmeanwd( arrays )`][@stdlib/stats/base/ndarray/dnanmeanwd]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanmidrange( arrays )`][@stdlib/stats/base/ndarray/dnanmidrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmin( arrays )`][@stdlib/stats/base/ndarray/dnanmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanminabs( arrays )`][@stdlib/stats/base/ndarray/dnanminabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmax( arrays )`][@stdlib/stats/base/ndarray/dnanmskmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a double-precision floating-point ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmin( arrays )`][@stdlib/stats/base/ndarray/dnanmskmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a double-precision floating-point ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskrange( arrays )`][@stdlib/stats/base/ndarray/dnanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional double-precision floating-point ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanrange( arrays )`][@stdlib/stats/base/ndarray/dnanrange]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`drange( arrays )`][@stdlib/stats/base/ndarray/drange]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`drangeabs( arrays )`][@stdlib/stats/base/ndarray/drangeabs]</span><span class="delimiter">: </span><span class="description">compute the range of absolute values of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dstdev( arrays )`][@stdlib/stats/base/ndarray/dstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dstdevch( arrays )`][@stdlib/stats/base/ndarray/dstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional double-precision floating-point ndarray using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dstdevpn( arrays )`][@stdlib/stats/base/ndarray/dstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional double-precision floating-point ndarray using a two-pass algorithm.</span>
-   <span class="signature">[`dstdevwd( arrays )`][@stdlib/stats/base/ndarray/dstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional double-precision floating-point ndarray using Welford's algorithm.</span>
-   <span class="signature">[`dztest( arrays )`][@stdlib/stats/base/ndarray/dztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dztest2( arrays )`][@stdlib/stats/base/ndarray/dztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test for two one-dimensional double-precision floating-point ndarrays.</span>
-   <span class="signature">[`maxBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/max-by]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray via a callback function.</span>
-   <span class="signature">[`max( arrays )`][@stdlib/stats/base/ndarray/max]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`maxabs( arrays )`][@stdlib/stats/base/ndarray/maxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional ndarray.</span>
-   <span class="signature">[`maxsorted( arrays )`][@stdlib/stats/base/ndarray/maxsorted]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a sorted one-dimensional ndarray.</span>
-   <span class="signature">[`mean( arrays )`][@stdlib/stats/base/ndarray/mean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray.</span>
-   <span class="signature">[`meankbn( arrays )`][@stdlib/stats/base/ndarray/meankbn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meankbn2( arrays )`][@stdlib/stats/base/ndarray/meankbn2]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meanors( arrays )`][@stdlib/stats/base/ndarray/meanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`meanpn( arrays )`][@stdlib/stats/base/ndarray/meanpn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray using a two-pass error correction algorithm.</span>
-   <span class="signature">[`meanpw( arrays )`][@stdlib/stats/base/ndarray/meanpw]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray using pairwise summation.</span>
-   <span class="signature">[`meanwd( arrays )`][@stdlib/stats/base/ndarray/meanwd]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray using Welford's algorithm.</span>
-   <span class="signature">[`mediansorted( arrays )`][@stdlib/stats/base/ndarray/mediansorted]</span><span class="delimiter">: </span><span class="description">compute the median value of a sorted one-dimensional ndarray.</span>
-   <span class="signature">[`midrangeBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/midrange-by]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a one-dimensional ndarray via a callback function.</span>
-   <span class="signature">[`midrange( arrays )`][@stdlib/stats/base/ndarray/midrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of a one-dimensional ndarray.</span>
-   <span class="signature">[`minBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/min-by]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional ndarray via a callback function.</span>
-   <span class="signature">[`min( arrays )`][@stdlib/stats/base/ndarray/min]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`minabs( arrays )`][@stdlib/stats/base/ndarray/minabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional ndarray.</span>
-   <span class="signature">[`minsorted( arrays )`][@stdlib/stats/base/ndarray/minsorted]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a sorted one-dimensional ndarray.</span>
-   <span class="signature">[`mskmax( arrays )`][@stdlib/stats/base/ndarray/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a one-dimensional ndarray according to a mask.</span>
-   <span class="signature">[`mskmaxabs( arrays )`][@stdlib/stats/base/ndarray/mskmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a one-dimensional ndarray according to a mask.</span>
-   <span class="signature">[`mskmidrange( arrays )`][@stdlib/stats/base/ndarray/mskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a one-dimensional ndarray according to a mask.</span>
-   <span class="signature">[`mskmin( arrays )`][@stdlib/stats/base/ndarray/mskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a one-dimensional ndarray according to a mask.</span>
-   <span class="signature">[`mskrange( arrays )`][@stdlib/stats/base/ndarray/mskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional ndarray according to a mask.</span>
-   <span class="signature">[`nanmaxBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/nanmax-by]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmax( arrays )`][@stdlib/stats/base/ndarray/nanmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmaxabs( arrays )`][@stdlib/stats/base/ndarray/nanmaxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmean( arrays )`][@stdlib/stats/base/ndarray/nanmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmeanors( arrays )`][@stdlib/stats/base/ndarray/nanmeanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`nanmeanpn( arrays )`][@stdlib/stats/base/ndarray/nanmeanpn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`nanmeanwd( arrays )`][@stdlib/stats/base/ndarray/nanmeanwd]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanmidrangeBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/nanmidrange-by]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a one-dimensional ndarray via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmidrange( arrays )`][@stdlib/stats/base/ndarray/nanmidrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/nanmin-by]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional ndarray via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( arrays )`][@stdlib/stats/base/ndarray/nanmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminabs( arrays )`][@stdlib/stats/base/ndarray/nanminabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmax( arrays )`][@stdlib/stats/base/ndarray/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a one-dimensional ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmin( arrays )`][@stdlib/stats/base/ndarray/nanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a one-dimensional ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskrange( arrays )`][@stdlib/stats/base/ndarray/nanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrangeBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/nanrange-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional ndarray via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( arrays )`][@stdlib/stats/base/ndarray/nanrange]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`rangeBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional ndarray via a callback function.</span>
-   <span class="signature">[`range( arrays )`][@stdlib/stats/base/ndarray/range]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional ndarray.</span>
-   <span class="signature">[`rangeabs( arrays )`][@stdlib/stats/base/ndarray/rangeabs]</span><span class="delimiter">: </span><span class="description">compute the range of absolute values of a one-dimensional ndarray.</span>
-   <span class="signature">[`scovarmtk( arrays )`][@stdlib/stats/base/ndarray/scovarmtk]</span><span class="delimiter">: </span><span class="description">calculate the covariance of two one-dimensional single-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`scumax( arrays )`][@stdlib/stats/base/ndarray/scumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`scumaxabs( arrays )`][@stdlib/stats/base/ndarray/scumaxabs]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum absolute value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`scumin( arrays )`][@stdlib/stats/base/ndarray/scumin]</span><span class="delimiter">: </span><span class="description">compute the cumulative minimum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`scuminabs( arrays )`][@stdlib/stats/base/ndarray/scuminabs]</span><span class="delimiter">: </span><span class="description">compute the cumulative minimum absolute value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sdsmean( arrays )`][@stdlib/stats/base/ndarray/sdsmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using extended accumulation.</span>
-   <span class="signature">[`sdsmeanors( arrays )`][@stdlib/stats/base/ndarray/sdsmeanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`sdsnanmeanors( arrays )`][@stdlib/stats/base/ndarray/sdsnanmeanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring NaN values and using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smax( arrays )`][@stdlib/stats/base/ndarray/smax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smaxabs( arrays )`][@stdlib/stats/base/ndarray/smaxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smaxabssorted( arrays )`][@stdlib/stats/base/ndarray/smaxabssorted]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a sorted one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smaxsorted( arrays )`][@stdlib/stats/base/ndarray/smaxsorted]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a sorted one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smean( arrays )`][@stdlib/stats/base/ndarray/smean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smeankbn( arrays )`][@stdlib/stats/base/ndarray/smeankbn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeankbn2( arrays )`][@stdlib/stats/base/ndarray/smeankbn2]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeanli( arrays )`][@stdlib/stats/base/ndarray/smeanli]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`smeanlipw( arrays )`][@stdlib/stats/base/ndarray/smeanlipw]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`smeanors( arrays )`][@stdlib/stats/base/ndarray/smeanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`smeanpn( arrays )`][@stdlib/stats/base/ndarray/smeanpn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using a two-pass error correction algorithm.</span>
-   <span class="signature">[`smeanpw( arrays )`][@stdlib/stats/base/ndarray/smeanpw]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using pairwise summation.</span>
-   <span class="signature">[`smeanwd( arrays )`][@stdlib/stats/base/ndarray/smeanwd]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray using Welford's algorithm.</span>
-   <span class="signature">[`smediansorted( arrays )`][@stdlib/stats/base/ndarray/smediansorted]</span><span class="delimiter">: </span><span class="description">compute the median value of a sorted one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smidrange( arrays )`][@stdlib/stats/base/ndarray/smidrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smin( arrays )`][@stdlib/stats/base/ndarray/smin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sminabs( arrays )`][@stdlib/stats/base/ndarray/sminabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sminsorted( arrays )`][@stdlib/stats/base/ndarray/sminsorted]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a sorted one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smskmax( arrays )`][@stdlib/stats/base/ndarray/smskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a one-dimensional single-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`smskmaxabs( arrays )`][@stdlib/stats/base/ndarray/smskmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a one-dimensional single-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`smskmidrange( arrays )`][@stdlib/stats/base/ndarray/smskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a one-dimensional single-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`smskmin( arrays )`][@stdlib/stats/base/ndarray/smskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a one-dimensional single-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`smskrange( arrays )`][@stdlib/stats/base/ndarray/smskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional single-precision floating-point ndarray according to a mask.</span>
-   <span class="signature">[`snanmax( arrays )`][@stdlib/stats/base/ndarray/snanmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmaxabs( arrays )`][@stdlib/stats/base/ndarray/snanmaxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmean( arrays )`][@stdlib/stats/base/ndarray/snanmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmeanors( arrays )`][@stdlib/stats/base/ndarray/snanmeanors]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snanmeanpn( arrays )`][@stdlib/stats/base/ndarray/snanmeanpn]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`snanmeanwd( arrays )`][@stdlib/stats/base/ndarray/snanmeanwd]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanmidrange( arrays )`][@stdlib/stats/base/ndarray/snanmidrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmin( arrays )`][@stdlib/stats/base/ndarray/snanmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanminabs( arrays )`][@stdlib/stats/base/ndarray/snanminabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmax( arrays )`][@stdlib/stats/base/ndarray/snanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a one-dimensional single-precision floating-point ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmin( arrays )`][@stdlib/stats/base/ndarray/snanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a one-dimensional single-precision floating-point ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskrange( arrays )`][@stdlib/stats/base/ndarray/snanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a one-dimensional single-precision floating-point ndarray according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanrange( arrays )`][@stdlib/stats/base/ndarray/snanrange]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`srange( arrays )`][@stdlib/stats/base/ndarray/srange]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`srangeabs( arrays )`][@stdlib/stats/base/ndarray/srangeabs]</span><span class="delimiter">: </span><span class="description">compute the range of absolute values of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sstdev( arrays )`][@stdlib/stats/base/ndarray/sstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sstdevch( arrays )`][@stdlib/stats/base/ndarray/sstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional single-precision floating-point ndarray using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`sstdevpn( arrays )`][@stdlib/stats/base/ndarray/sstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional single-precision floating-point ndarray using a two-pass algorithm.</span>
-   <span class="signature">[`sstdevwd( arrays )`][@stdlib/stats/base/ndarray/sstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional single-precision floating-point ndarray using Welford's algorithm.</span>
-   <span class="signature">[`stdev( arrays )`][@stdlib/stats/base/ndarray/stdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional ndarray.</span>
-   <span class="signature">[`stdevch( arrays )`][@stdlib/stats/base/ndarray/stdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional ndarray using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`stdevpn( arrays )`][@stdlib/stats/base/ndarray/stdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional ndarray using a two-pass algorithm.</span>
-   <span class="signature">[`stdevtk( arrays )`][@stdlib/stats/base/ndarray/stdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional ndarray using a one-pass textbook algorithm.</span>
-   <span class="signature">[`stdevwd( arrays )`][@stdlib/stats/base/ndarray/stdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional ndarray using Welford's algorithm.</span>
-   <span class="signature">[`stdevyc( arrays )`][@stdlib/stats/base/ndarray/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a one-dimensional ndarray using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`sztest( arrays )`][@stdlib/stats/base/ndarray/sztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sztest2( arrays )`][@stdlib/stats/base/ndarray/sztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test for two one-dimensional single-precision floating-point ndarrays.</span>
-   <span class="signature">[`variance( arrays )`][@stdlib/stats/base/ndarray/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a one-dimensional ndarray.</span>
-   <span class="signature">[`variancech( arrays )`][@stdlib/stats/base/ndarray/variancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a one-dimensional ndarray using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`variancewd( arrays )`][@stdlib/stats/base/ndarray/variancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a one-dimensional ndarray using Welford's algorithm.</span>
-   <span class="signature">[`ztest( arrays )`][@stdlib/stats/base/ndarray/ztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a one-dimensional ndarray.</span>
-   <span class="signature">[`ztest2( arrays )`][@stdlib/stats/base/ndarray/ztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test for two one-dimensional ndarrays.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray@deno/mod.js';

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-ndarray.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-ndarray

[test-image]: https://github.com/stdlib-js/stats-base-ndarray/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-ndarray/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-ndarray/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-ndarray?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-ndarray.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-ndarray/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-ndarray/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-ndarray/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-ndarray/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-ndarray/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-ndarray/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-ndarray/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-ndarray/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-ndarray/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/base/ndarray/covarmtk]: https://github.com/stdlib-js/stats-base-ndarray-covarmtk/tree/deno

[@stdlib/stats/base/ndarray/cumax]: https://github.com/stdlib-js/stats-base-ndarray-cumax/tree/deno

[@stdlib/stats/base/ndarray/cumin]: https://github.com/stdlib-js/stats-base-ndarray-cumin/tree/deno

[@stdlib/stats/base/ndarray/dcovarmtk]: https://github.com/stdlib-js/stats-base-ndarray-dcovarmtk/tree/deno

[@stdlib/stats/base/ndarray/dcumax]: https://github.com/stdlib-js/stats-base-ndarray-dcumax/tree/deno

[@stdlib/stats/base/ndarray/dcumaxabs]: https://github.com/stdlib-js/stats-base-ndarray-dcumaxabs/tree/deno

[@stdlib/stats/base/ndarray/dcumin]: https://github.com/stdlib-js/stats-base-ndarray-dcumin/tree/deno

[@stdlib/stats/base/ndarray/dcuminabs]: https://github.com/stdlib-js/stats-base-ndarray-dcuminabs/tree/deno

[@stdlib/stats/base/ndarray/dmax]: https://github.com/stdlib-js/stats-base-ndarray-dmax/tree/deno

[@stdlib/stats/base/ndarray/dmaxabs]: https://github.com/stdlib-js/stats-base-ndarray-dmaxabs/tree/deno

[@stdlib/stats/base/ndarray/dmaxabssorted]: https://github.com/stdlib-js/stats-base-ndarray-dmaxabssorted/tree/deno

[@stdlib/stats/base/ndarray/dmaxsorted]: https://github.com/stdlib-js/stats-base-ndarray-dmaxsorted/tree/deno

[@stdlib/stats/base/ndarray/dmean]: https://github.com/stdlib-js/stats-base-ndarray-dmean/tree/deno

[@stdlib/stats/base/ndarray/dmeankbn]: https://github.com/stdlib-js/stats-base-ndarray-dmeankbn/tree/deno

[@stdlib/stats/base/ndarray/dmeankbn2]: https://github.com/stdlib-js/stats-base-ndarray-dmeankbn2/tree/deno

[@stdlib/stats/base/ndarray/dmeanli]: https://github.com/stdlib-js/stats-base-ndarray-dmeanli/tree/deno

[@stdlib/stats/base/ndarray/dmeanlipw]: https://github.com/stdlib-js/stats-base-ndarray-dmeanlipw/tree/deno

[@stdlib/stats/base/ndarray/dmeanors]: https://github.com/stdlib-js/stats-base-ndarray-dmeanors/tree/deno

[@stdlib/stats/base/ndarray/dmeanpn]: https://github.com/stdlib-js/stats-base-ndarray-dmeanpn/tree/deno

[@stdlib/stats/base/ndarray/dmeanpw]: https://github.com/stdlib-js/stats-base-ndarray-dmeanpw/tree/deno

[@stdlib/stats/base/ndarray/dmeanstdev]: https://github.com/stdlib-js/stats-base-ndarray-dmeanstdev/tree/deno

[@stdlib/stats/base/ndarray/dmeanwd]: https://github.com/stdlib-js/stats-base-ndarray-dmeanwd/tree/deno

[@stdlib/stats/base/ndarray/dmediansorted]: https://github.com/stdlib-js/stats-base-ndarray-dmediansorted/tree/deno

[@stdlib/stats/base/ndarray/dmidrange]: https://github.com/stdlib-js/stats-base-ndarray-dmidrange/tree/deno

[@stdlib/stats/base/ndarray/dmin]: https://github.com/stdlib-js/stats-base-ndarray-dmin/tree/deno

[@stdlib/stats/base/ndarray/dminabs]: https://github.com/stdlib-js/stats-base-ndarray-dminabs/tree/deno

[@stdlib/stats/base/ndarray/dminsorted]: https://github.com/stdlib-js/stats-base-ndarray-dminsorted/tree/deno

[@stdlib/stats/base/ndarray/dmskmax]: https://github.com/stdlib-js/stats-base-ndarray-dmskmax/tree/deno

[@stdlib/stats/base/ndarray/dmskmin]: https://github.com/stdlib-js/stats-base-ndarray-dmskmin/tree/deno

[@stdlib/stats/base/ndarray/dmskrange]: https://github.com/stdlib-js/stats-base-ndarray-dmskrange/tree/deno

[@stdlib/stats/base/ndarray/dnanmax]: https://github.com/stdlib-js/stats-base-ndarray-dnanmax/tree/deno

[@stdlib/stats/base/ndarray/dnanmaxabs]: https://github.com/stdlib-js/stats-base-ndarray-dnanmaxabs/tree/deno

[@stdlib/stats/base/ndarray/dnanmean]: https://github.com/stdlib-js/stats-base-ndarray-dnanmean/tree/deno

[@stdlib/stats/base/ndarray/dnanmeanors]: https://github.com/stdlib-js/stats-base-ndarray-dnanmeanors/tree/deno

[@stdlib/stats/base/ndarray/dnanmeanpn]: https://github.com/stdlib-js/stats-base-ndarray-dnanmeanpn/tree/deno

[@stdlib/stats/base/ndarray/dnanmeanpw]: https://github.com/stdlib-js/stats-base-ndarray-dnanmeanpw/tree/deno

[@stdlib/stats/base/ndarray/dnanmeanwd]: https://github.com/stdlib-js/stats-base-ndarray-dnanmeanwd/tree/deno

[@stdlib/stats/base/ndarray/dnanmidrange]: https://github.com/stdlib-js/stats-base-ndarray-dnanmidrange/tree/deno

[@stdlib/stats/base/ndarray/dnanmin]: https://github.com/stdlib-js/stats-base-ndarray-dnanmin/tree/deno

[@stdlib/stats/base/ndarray/dnanminabs]: https://github.com/stdlib-js/stats-base-ndarray-dnanminabs/tree/deno

[@stdlib/stats/base/ndarray/dnanmskmax]: https://github.com/stdlib-js/stats-base-ndarray-dnanmskmax/tree/deno

[@stdlib/stats/base/ndarray/dnanmskmin]: https://github.com/stdlib-js/stats-base-ndarray-dnanmskmin/tree/deno

[@stdlib/stats/base/ndarray/dnanmskrange]: https://github.com/stdlib-js/stats-base-ndarray-dnanmskrange/tree/deno

[@stdlib/stats/base/ndarray/dnanrange]: https://github.com/stdlib-js/stats-base-ndarray-dnanrange/tree/deno

[@stdlib/stats/base/ndarray/drange]: https://github.com/stdlib-js/stats-base-ndarray-drange/tree/deno

[@stdlib/stats/base/ndarray/drangeabs]: https://github.com/stdlib-js/stats-base-ndarray-drangeabs/tree/deno

[@stdlib/stats/base/ndarray/dstdev]: https://github.com/stdlib-js/stats-base-ndarray-dstdev/tree/deno

[@stdlib/stats/base/ndarray/dstdevch]: https://github.com/stdlib-js/stats-base-ndarray-dstdevch/tree/deno

[@stdlib/stats/base/ndarray/dstdevpn]: https://github.com/stdlib-js/stats-base-ndarray-dstdevpn/tree/deno

[@stdlib/stats/base/ndarray/dstdevwd]: https://github.com/stdlib-js/stats-base-ndarray-dstdevwd/tree/deno

[@stdlib/stats/base/ndarray/dztest]: https://github.com/stdlib-js/stats-base-ndarray-dztest/tree/deno

[@stdlib/stats/base/ndarray/dztest2]: https://github.com/stdlib-js/stats-base-ndarray-dztest2/tree/deno

[@stdlib/stats/base/ndarray/max-by]: https://github.com/stdlib-js/stats-base-ndarray-max-by/tree/deno

[@stdlib/stats/base/ndarray/max]: https://github.com/stdlib-js/stats-base-ndarray-max/tree/deno

[@stdlib/stats/base/ndarray/maxabs]: https://github.com/stdlib-js/stats-base-ndarray-maxabs/tree/deno

[@stdlib/stats/base/ndarray/maxsorted]: https://github.com/stdlib-js/stats-base-ndarray-maxsorted/tree/deno

[@stdlib/stats/base/ndarray/mean]: https://github.com/stdlib-js/stats-base-ndarray-mean/tree/deno

[@stdlib/stats/base/ndarray/meankbn]: https://github.com/stdlib-js/stats-base-ndarray-meankbn/tree/deno

[@stdlib/stats/base/ndarray/meankbn2]: https://github.com/stdlib-js/stats-base-ndarray-meankbn2/tree/deno

[@stdlib/stats/base/ndarray/meanors]: https://github.com/stdlib-js/stats-base-ndarray-meanors/tree/deno

[@stdlib/stats/base/ndarray/meanpn]: https://github.com/stdlib-js/stats-base-ndarray-meanpn/tree/deno

[@stdlib/stats/base/ndarray/meanpw]: https://github.com/stdlib-js/stats-base-ndarray-meanpw/tree/deno

[@stdlib/stats/base/ndarray/meanwd]: https://github.com/stdlib-js/stats-base-ndarray-meanwd/tree/deno

[@stdlib/stats/base/ndarray/mediansorted]: https://github.com/stdlib-js/stats-base-ndarray-mediansorted/tree/deno

[@stdlib/stats/base/ndarray/midrange-by]: https://github.com/stdlib-js/stats-base-ndarray-midrange-by/tree/deno

[@stdlib/stats/base/ndarray/midrange]: https://github.com/stdlib-js/stats-base-ndarray-midrange/tree/deno

[@stdlib/stats/base/ndarray/min-by]: https://github.com/stdlib-js/stats-base-ndarray-min-by/tree/deno

[@stdlib/stats/base/ndarray/min]: https://github.com/stdlib-js/stats-base-ndarray-min/tree/deno

[@stdlib/stats/base/ndarray/minabs]: https://github.com/stdlib-js/stats-base-ndarray-minabs/tree/deno

[@stdlib/stats/base/ndarray/minsorted]: https://github.com/stdlib-js/stats-base-ndarray-minsorted/tree/deno

[@stdlib/stats/base/ndarray/mskmax]: https://github.com/stdlib-js/stats-base-ndarray-mskmax/tree/deno

[@stdlib/stats/base/ndarray/mskmaxabs]: https://github.com/stdlib-js/stats-base-ndarray-mskmaxabs/tree/deno

[@stdlib/stats/base/ndarray/mskmidrange]: https://github.com/stdlib-js/stats-base-ndarray-mskmidrange/tree/deno

[@stdlib/stats/base/ndarray/mskmin]: https://github.com/stdlib-js/stats-base-ndarray-mskmin/tree/deno

[@stdlib/stats/base/ndarray/mskrange]: https://github.com/stdlib-js/stats-base-ndarray-mskrange/tree/deno

[@stdlib/stats/base/ndarray/nanmax-by]: https://github.com/stdlib-js/stats-base-ndarray-nanmax-by/tree/deno

[@stdlib/stats/base/ndarray/nanmax]: https://github.com/stdlib-js/stats-base-ndarray-nanmax/tree/deno

[@stdlib/stats/base/ndarray/nanmaxabs]: https://github.com/stdlib-js/stats-base-ndarray-nanmaxabs/tree/deno

[@stdlib/stats/base/ndarray/nanmean]: https://github.com/stdlib-js/stats-base-ndarray-nanmean/tree/deno

[@stdlib/stats/base/ndarray/nanmeanors]: https://github.com/stdlib-js/stats-base-ndarray-nanmeanors/tree/deno

[@stdlib/stats/base/ndarray/nanmeanpn]: https://github.com/stdlib-js/stats-base-ndarray-nanmeanpn/tree/deno

[@stdlib/stats/base/ndarray/nanmeanwd]: https://github.com/stdlib-js/stats-base-ndarray-nanmeanwd/tree/deno

[@stdlib/stats/base/ndarray/nanmidrange-by]: https://github.com/stdlib-js/stats-base-ndarray-nanmidrange-by/tree/deno

[@stdlib/stats/base/ndarray/nanmidrange]: https://github.com/stdlib-js/stats-base-ndarray-nanmidrange/tree/deno

[@stdlib/stats/base/ndarray/nanmin-by]: https://github.com/stdlib-js/stats-base-ndarray-nanmin-by/tree/deno

[@stdlib/stats/base/ndarray/nanmin]: https://github.com/stdlib-js/stats-base-ndarray-nanmin/tree/deno

[@stdlib/stats/base/ndarray/nanminabs]: https://github.com/stdlib-js/stats-base-ndarray-nanminabs/tree/deno

[@stdlib/stats/base/ndarray/nanmskmax]: https://github.com/stdlib-js/stats-base-ndarray-nanmskmax/tree/deno

[@stdlib/stats/base/ndarray/nanmskmin]: https://github.com/stdlib-js/stats-base-ndarray-nanmskmin/tree/deno

[@stdlib/stats/base/ndarray/nanmskrange]: https://github.com/stdlib-js/stats-base-ndarray-nanmskrange/tree/deno

[@stdlib/stats/base/ndarray/nanrange-by]: https://github.com/stdlib-js/stats-base-ndarray-nanrange-by/tree/deno

[@stdlib/stats/base/ndarray/nanrange]: https://github.com/stdlib-js/stats-base-ndarray-nanrange/tree/deno

[@stdlib/stats/base/ndarray/range-by]: https://github.com/stdlib-js/stats-base-ndarray-range-by/tree/deno

[@stdlib/stats/base/ndarray/range]: https://github.com/stdlib-js/stats-base-ndarray-range/tree/deno

[@stdlib/stats/base/ndarray/rangeabs]: https://github.com/stdlib-js/stats-base-ndarray-rangeabs/tree/deno

[@stdlib/stats/base/ndarray/scovarmtk]: https://github.com/stdlib-js/stats-base-ndarray-scovarmtk/tree/deno

[@stdlib/stats/base/ndarray/scumax]: https://github.com/stdlib-js/stats-base-ndarray-scumax/tree/deno

[@stdlib/stats/base/ndarray/scumaxabs]: https://github.com/stdlib-js/stats-base-ndarray-scumaxabs/tree/deno

[@stdlib/stats/base/ndarray/scumin]: https://github.com/stdlib-js/stats-base-ndarray-scumin/tree/deno

[@stdlib/stats/base/ndarray/scuminabs]: https://github.com/stdlib-js/stats-base-ndarray-scuminabs/tree/deno

[@stdlib/stats/base/ndarray/sdsmean]: https://github.com/stdlib-js/stats-base-ndarray-sdsmean/tree/deno

[@stdlib/stats/base/ndarray/sdsmeanors]: https://github.com/stdlib-js/stats-base-ndarray-sdsmeanors/tree/deno

[@stdlib/stats/base/ndarray/sdsnanmeanors]: https://github.com/stdlib-js/stats-base-ndarray-sdsnanmeanors/tree/deno

[@stdlib/stats/base/ndarray/smax]: https://github.com/stdlib-js/stats-base-ndarray-smax/tree/deno

[@stdlib/stats/base/ndarray/smaxabs]: https://github.com/stdlib-js/stats-base-ndarray-smaxabs/tree/deno

[@stdlib/stats/base/ndarray/smaxabssorted]: https://github.com/stdlib-js/stats-base-ndarray-smaxabssorted/tree/deno

[@stdlib/stats/base/ndarray/smaxsorted]: https://github.com/stdlib-js/stats-base-ndarray-smaxsorted/tree/deno

[@stdlib/stats/base/ndarray/smean]: https://github.com/stdlib-js/stats-base-ndarray-smean/tree/deno

[@stdlib/stats/base/ndarray/smeankbn]: https://github.com/stdlib-js/stats-base-ndarray-smeankbn/tree/deno

[@stdlib/stats/base/ndarray/smeankbn2]: https://github.com/stdlib-js/stats-base-ndarray-smeankbn2/tree/deno

[@stdlib/stats/base/ndarray/smeanli]: https://github.com/stdlib-js/stats-base-ndarray-smeanli/tree/deno

[@stdlib/stats/base/ndarray/smeanlipw]: https://github.com/stdlib-js/stats-base-ndarray-smeanlipw/tree/deno

[@stdlib/stats/base/ndarray/smeanors]: https://github.com/stdlib-js/stats-base-ndarray-smeanors/tree/deno

[@stdlib/stats/base/ndarray/smeanpn]: https://github.com/stdlib-js/stats-base-ndarray-smeanpn/tree/deno

[@stdlib/stats/base/ndarray/smeanpw]: https://github.com/stdlib-js/stats-base-ndarray-smeanpw/tree/deno

[@stdlib/stats/base/ndarray/smeanwd]: https://github.com/stdlib-js/stats-base-ndarray-smeanwd/tree/deno

[@stdlib/stats/base/ndarray/smediansorted]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/tree/deno

[@stdlib/stats/base/ndarray/smidrange]: https://github.com/stdlib-js/stats-base-ndarray-smidrange/tree/deno

[@stdlib/stats/base/ndarray/smin]: https://github.com/stdlib-js/stats-base-ndarray-smin/tree/deno

[@stdlib/stats/base/ndarray/sminabs]: https://github.com/stdlib-js/stats-base-ndarray-sminabs/tree/deno

[@stdlib/stats/base/ndarray/sminsorted]: https://github.com/stdlib-js/stats-base-ndarray-sminsorted/tree/deno

[@stdlib/stats/base/ndarray/smskmax]: https://github.com/stdlib-js/stats-base-ndarray-smskmax/tree/deno

[@stdlib/stats/base/ndarray/smskmaxabs]: https://github.com/stdlib-js/stats-base-ndarray-smskmaxabs/tree/deno

[@stdlib/stats/base/ndarray/smskmidrange]: https://github.com/stdlib-js/stats-base-ndarray-smskmidrange/tree/deno

[@stdlib/stats/base/ndarray/smskmin]: https://github.com/stdlib-js/stats-base-ndarray-smskmin/tree/deno

[@stdlib/stats/base/ndarray/smskrange]: https://github.com/stdlib-js/stats-base-ndarray-smskrange/tree/deno

[@stdlib/stats/base/ndarray/snanmax]: https://github.com/stdlib-js/stats-base-ndarray-snanmax/tree/deno

[@stdlib/stats/base/ndarray/snanmaxabs]: https://github.com/stdlib-js/stats-base-ndarray-snanmaxabs/tree/deno

[@stdlib/stats/base/ndarray/snanmean]: https://github.com/stdlib-js/stats-base-ndarray-snanmean/tree/deno

[@stdlib/stats/base/ndarray/snanmeanors]: https://github.com/stdlib-js/stats-base-ndarray-snanmeanors/tree/deno

[@stdlib/stats/base/ndarray/snanmeanpn]: https://github.com/stdlib-js/stats-base-ndarray-snanmeanpn/tree/deno

[@stdlib/stats/base/ndarray/snanmeanwd]: https://github.com/stdlib-js/stats-base-ndarray-snanmeanwd/tree/deno

[@stdlib/stats/base/ndarray/snanmidrange]: https://github.com/stdlib-js/stats-base-ndarray-snanmidrange/tree/deno

[@stdlib/stats/base/ndarray/snanmin]: https://github.com/stdlib-js/stats-base-ndarray-snanmin/tree/deno

[@stdlib/stats/base/ndarray/snanminabs]: https://github.com/stdlib-js/stats-base-ndarray-snanminabs/tree/deno

[@stdlib/stats/base/ndarray/snanmskmax]: https://github.com/stdlib-js/stats-base-ndarray-snanmskmax/tree/deno

[@stdlib/stats/base/ndarray/snanmskmin]: https://github.com/stdlib-js/stats-base-ndarray-snanmskmin/tree/deno

[@stdlib/stats/base/ndarray/snanmskrange]: https://github.com/stdlib-js/stats-base-ndarray-snanmskrange/tree/deno

[@stdlib/stats/base/ndarray/snanrange]: https://github.com/stdlib-js/stats-base-ndarray-snanrange/tree/deno

[@stdlib/stats/base/ndarray/srange]: https://github.com/stdlib-js/stats-base-ndarray-srange/tree/deno

[@stdlib/stats/base/ndarray/srangeabs]: https://github.com/stdlib-js/stats-base-ndarray-srangeabs/tree/deno

[@stdlib/stats/base/ndarray/sstdev]: https://github.com/stdlib-js/stats-base-ndarray-sstdev/tree/deno

[@stdlib/stats/base/ndarray/sstdevch]: https://github.com/stdlib-js/stats-base-ndarray-sstdevch/tree/deno

[@stdlib/stats/base/ndarray/sstdevpn]: https://github.com/stdlib-js/stats-base-ndarray-sstdevpn/tree/deno

[@stdlib/stats/base/ndarray/sstdevwd]: https://github.com/stdlib-js/stats-base-ndarray-sstdevwd/tree/deno

[@stdlib/stats/base/ndarray/stdev]: https://github.com/stdlib-js/stats-base-ndarray-stdev/tree/deno

[@stdlib/stats/base/ndarray/stdevch]: https://github.com/stdlib-js/stats-base-ndarray-stdevch/tree/deno

[@stdlib/stats/base/ndarray/stdevpn]: https://github.com/stdlib-js/stats-base-ndarray-stdevpn/tree/deno

[@stdlib/stats/base/ndarray/stdevtk]: https://github.com/stdlib-js/stats-base-ndarray-stdevtk/tree/deno

[@stdlib/stats/base/ndarray/stdevwd]: https://github.com/stdlib-js/stats-base-ndarray-stdevwd/tree/deno

[@stdlib/stats/base/ndarray/stdevyc]: https://github.com/stdlib-js/stats-base-ndarray-stdevyc/tree/deno

[@stdlib/stats/base/ndarray/sztest]: https://github.com/stdlib-js/stats-base-ndarray-sztest/tree/deno

[@stdlib/stats/base/ndarray/sztest2]: https://github.com/stdlib-js/stats-base-ndarray-sztest2/tree/deno

[@stdlib/stats/base/ndarray/variance]: https://github.com/stdlib-js/stats-base-ndarray-variance/tree/deno

[@stdlib/stats/base/ndarray/variancech]: https://github.com/stdlib-js/stats-base-ndarray-variancech/tree/deno

[@stdlib/stats/base/ndarray/variancewd]: https://github.com/stdlib-js/stats-base-ndarray-variancewd/tree/deno

[@stdlib/stats/base/ndarray/ztest]: https://github.com/stdlib-js/stats-base-ndarray-ztest/tree/deno

[@stdlib/stats/base/ndarray/ztest2]: https://github.com/stdlib-js/stats-base-ndarray-ztest2/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
