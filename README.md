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

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-ndarray
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/stats-base-ndarray' );
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
-   <span class="signature">[`dcumin( arrays )`][@stdlib/stats/base/ndarray/dcumin]</span><span class="delimiter">: </span><span class="description">compute the cumulative minimum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmax( arrays )`][@stdlib/stats/base/ndarray/dmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmaxabs( arrays )`][@stdlib/stats/base/ndarray/dmaxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmaxsorted( arrays )`][@stdlib/stats/base/ndarray/dmaxsorted]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a sorted one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmean( arrays )`][@stdlib/stats/base/ndarray/dmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dmin( arrays )`][@stdlib/stats/base/ndarray/dmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dminabs( arrays )`][@stdlib/stats/base/ndarray/dminabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dnanmax( arrays )`][@stdlib/stats/base/ndarray/dnanmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmean( arrays )`][@stdlib/stats/base/ndarray/dnanmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmin( arrays )`][@stdlib/stats/base/ndarray/dnanmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`drange( arrays )`][@stdlib/stats/base/ndarray/drange]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dztest( arrays )`][@stdlib/stats/base/ndarray/dztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dztest2( arrays )`][@stdlib/stats/base/ndarray/dztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test for two one-dimensional double-precision floating-point ndarrays.</span>
-   <span class="signature">[`maxBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/max-by]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray via a callback function.</span>
-   <span class="signature">[`max( arrays )`][@stdlib/stats/base/ndarray/max]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`maxabs( arrays )`][@stdlib/stats/base/ndarray/maxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional ndarray.</span>
-   <span class="signature">[`maxsorted( arrays )`][@stdlib/stats/base/ndarray/maxsorted]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a sorted one-dimensional ndarray.</span>
-   <span class="signature">[`mean( arrays )`][@stdlib/stats/base/ndarray/mean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray.</span>
-   <span class="signature">[`minBy( arrays, clbk[, thisArg ] )`][@stdlib/stats/base/ndarray/min-by]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional ndarray via a callback function.</span>
-   <span class="signature">[`min( arrays )`][@stdlib/stats/base/ndarray/min]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional ndarray.</span>
-   <span class="signature">[`minabs( arrays )`][@stdlib/stats/base/ndarray/minabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional ndarray.</span>
-   <span class="signature">[`nanmax( arrays )`][@stdlib/stats/base/ndarray/nanmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmean( arrays )`][@stdlib/stats/base/ndarray/nanmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( arrays )`][@stdlib/stats/base/ndarray/nanmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`range( arrays )`][@stdlib/stats/base/ndarray/range]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional ndarray.</span>
-   <span class="signature">[`scovarmtk( arrays )`][@stdlib/stats/base/ndarray/scovarmtk]</span><span class="delimiter">: </span><span class="description">calculate the covariance of two one-dimensional single-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`scumax( arrays )`][@stdlib/stats/base/ndarray/scumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`scumin( arrays )`][@stdlib/stats/base/ndarray/scumin]</span><span class="delimiter">: </span><span class="description">compute the cumulative minimum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smax( arrays )`][@stdlib/stats/base/ndarray/smax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smaxabs( arrays )`][@stdlib/stats/base/ndarray/smaxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smaxsorted( arrays )`][@stdlib/stats/base/ndarray/smaxsorted]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a sorted one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smean( arrays )`][@stdlib/stats/base/ndarray/smean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`smin( arrays )`][@stdlib/stats/base/ndarray/smin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sminabs( arrays )`][@stdlib/stats/base/ndarray/sminabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`snanmax( arrays )`][@stdlib/stats/base/ndarray/snanmax]</span><span class="delimiter">: </span><span class="description">compute the maximum value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmean( arrays )`][@stdlib/stats/base/ndarray/snanmean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmin( arrays )`][@stdlib/stats/base/ndarray/snanmin]</span><span class="delimiter">: </span><span class="description">compute the minimum value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`srange( arrays )`][@stdlib/stats/base/ndarray/srange]</span><span class="delimiter">: </span><span class="description">compute the range of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sztest( arrays )`][@stdlib/stats/base/ndarray/sztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sztest2( arrays )`][@stdlib/stats/base/ndarray/sztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test for two one-dimensional single-precision floating-point ndarrays.</span>
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
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/stats-base-ndarray' );

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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-ndarray.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-ndarray

[test-image]: https://github.com/stdlib-js/stats-base-ndarray/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-ndarray/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-ndarray/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-ndarray?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-ndarray.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-ndarray/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

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

[@stdlib/stats/base/ndarray/covarmtk]: https://github.com/stdlib-js/stats-base-ndarray-covarmtk

[@stdlib/stats/base/ndarray/cumax]: https://github.com/stdlib-js/stats-base-ndarray-cumax

[@stdlib/stats/base/ndarray/cumin]: https://github.com/stdlib-js/stats-base-ndarray-cumin

[@stdlib/stats/base/ndarray/dcovarmtk]: https://github.com/stdlib-js/stats-base-ndarray-dcovarmtk

[@stdlib/stats/base/ndarray/dcumax]: https://github.com/stdlib-js/stats-base-ndarray-dcumax

[@stdlib/stats/base/ndarray/dcumin]: https://github.com/stdlib-js/stats-base-ndarray-dcumin

[@stdlib/stats/base/ndarray/dmax]: https://github.com/stdlib-js/stats-base-ndarray-dmax

[@stdlib/stats/base/ndarray/dmaxabs]: https://github.com/stdlib-js/stats-base-ndarray-dmaxabs

[@stdlib/stats/base/ndarray/dmaxsorted]: https://github.com/stdlib-js/stats-base-ndarray-dmaxsorted

[@stdlib/stats/base/ndarray/dmean]: https://github.com/stdlib-js/stats-base-ndarray-dmean

[@stdlib/stats/base/ndarray/dmin]: https://github.com/stdlib-js/stats-base-ndarray-dmin

[@stdlib/stats/base/ndarray/dminabs]: https://github.com/stdlib-js/stats-base-ndarray-dminabs

[@stdlib/stats/base/ndarray/dnanmax]: https://github.com/stdlib-js/stats-base-ndarray-dnanmax

[@stdlib/stats/base/ndarray/dnanmean]: https://github.com/stdlib-js/stats-base-ndarray-dnanmean

[@stdlib/stats/base/ndarray/dnanmin]: https://github.com/stdlib-js/stats-base-ndarray-dnanmin

[@stdlib/stats/base/ndarray/drange]: https://github.com/stdlib-js/stats-base-ndarray-drange

[@stdlib/stats/base/ndarray/dztest]: https://github.com/stdlib-js/stats-base-ndarray-dztest

[@stdlib/stats/base/ndarray/dztest2]: https://github.com/stdlib-js/stats-base-ndarray-dztest2

[@stdlib/stats/base/ndarray/max-by]: https://github.com/stdlib-js/stats-base-ndarray-max-by

[@stdlib/stats/base/ndarray/max]: https://github.com/stdlib-js/stats-base-ndarray-max

[@stdlib/stats/base/ndarray/maxabs]: https://github.com/stdlib-js/stats-base-ndarray-maxabs

[@stdlib/stats/base/ndarray/maxsorted]: https://github.com/stdlib-js/stats-base-ndarray-maxsorted

[@stdlib/stats/base/ndarray/mean]: https://github.com/stdlib-js/stats-base-ndarray-mean

[@stdlib/stats/base/ndarray/min-by]: https://github.com/stdlib-js/stats-base-ndarray-min-by

[@stdlib/stats/base/ndarray/min]: https://github.com/stdlib-js/stats-base-ndarray-min

[@stdlib/stats/base/ndarray/minabs]: https://github.com/stdlib-js/stats-base-ndarray-minabs

[@stdlib/stats/base/ndarray/nanmax]: https://github.com/stdlib-js/stats-base-ndarray-nanmax

[@stdlib/stats/base/ndarray/nanmean]: https://github.com/stdlib-js/stats-base-ndarray-nanmean

[@stdlib/stats/base/ndarray/nanmin]: https://github.com/stdlib-js/stats-base-ndarray-nanmin

[@stdlib/stats/base/ndarray/range]: https://github.com/stdlib-js/stats-base-ndarray-range

[@stdlib/stats/base/ndarray/scovarmtk]: https://github.com/stdlib-js/stats-base-ndarray-scovarmtk

[@stdlib/stats/base/ndarray/scumax]: https://github.com/stdlib-js/stats-base-ndarray-scumax

[@stdlib/stats/base/ndarray/scumin]: https://github.com/stdlib-js/stats-base-ndarray-scumin

[@stdlib/stats/base/ndarray/smax]: https://github.com/stdlib-js/stats-base-ndarray-smax

[@stdlib/stats/base/ndarray/smaxabs]: https://github.com/stdlib-js/stats-base-ndarray-smaxabs

[@stdlib/stats/base/ndarray/smaxsorted]: https://github.com/stdlib-js/stats-base-ndarray-smaxsorted

[@stdlib/stats/base/ndarray/smean]: https://github.com/stdlib-js/stats-base-ndarray-smean

[@stdlib/stats/base/ndarray/smin]: https://github.com/stdlib-js/stats-base-ndarray-smin

[@stdlib/stats/base/ndarray/sminabs]: https://github.com/stdlib-js/stats-base-ndarray-sminabs

[@stdlib/stats/base/ndarray/snanmax]: https://github.com/stdlib-js/stats-base-ndarray-snanmax

[@stdlib/stats/base/ndarray/snanmean]: https://github.com/stdlib-js/stats-base-ndarray-snanmean

[@stdlib/stats/base/ndarray/snanmin]: https://github.com/stdlib-js/stats-base-ndarray-snanmin

[@stdlib/stats/base/ndarray/srange]: https://github.com/stdlib-js/stats-base-ndarray-srange

[@stdlib/stats/base/ndarray/sztest]: https://github.com/stdlib-js/stats-base-ndarray-sztest

[@stdlib/stats/base/ndarray/sztest2]: https://github.com/stdlib-js/stats-base-ndarray-sztest2

[@stdlib/stats/base/ndarray/ztest]: https://github.com/stdlib-js/stats-base-ndarray-ztest

[@stdlib/stats/base/ndarray/ztest2]: https://github.com/stdlib-js/stats-base-ndarray-ztest2

<!-- </toc-links> -->

</section>

<!-- /.links -->
