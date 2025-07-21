/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name cumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/cumax}
*/
setReadOnly( ns, 'cumax', require( '@stdlib/stats-base-ndarray-cumax' ) );

/**
* @name cumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/cumin}
*/
setReadOnly( ns, 'cumin', require( '@stdlib/stats-base-ndarray-cumin' ) );

/**
* @name dcumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcumax}
*/
setReadOnly( ns, 'dcumax', require( '@stdlib/stats-base-ndarray-dcumax' ) );

/**
* @name dcumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcumin}
*/
setReadOnly( ns, 'dcumin', require( '@stdlib/stats-base-ndarray-dcumin' ) );

/**
* @name dmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmax}
*/
setReadOnly( ns, 'dmax', require( '@stdlib/stats-base-ndarray-dmax' ) );

/**
* @name dmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmin}
*/
setReadOnly( ns, 'dmin', require( '@stdlib/stats-base-ndarray-dmin' ) );

/**
* @name drange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/drange}
*/
setReadOnly( ns, 'drange', require( '@stdlib/stats-base-ndarray-drange' ) );

/**
* @name dztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dztest}
*/
setReadOnly( ns, 'dztest', require( '@stdlib/stats-base-ndarray-dztest' ) );

/**
* @name dztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dztest2}
*/
setReadOnly( ns, 'dztest2', require( '@stdlib/stats-base-ndarray-dztest2' ) );

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/max}
*/
setReadOnly( ns, 'max', require( '@stdlib/stats-base-ndarray-max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/max-by}
*/
setReadOnly( ns, 'maxBy', require( '@stdlib/stats-base-ndarray-max-by' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/min}
*/
setReadOnly( ns, 'min', require( '@stdlib/stats-base-ndarray-min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/min-by}
*/
setReadOnly( ns, 'minBy', require( '@stdlib/stats-base-ndarray-min-by' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/range}
*/
setReadOnly( ns, 'range', require( '@stdlib/stats-base-ndarray-range' ) );

/**
* @name scumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scumax}
*/
setReadOnly( ns, 'scumax', require( '@stdlib/stats-base-ndarray-scumax' ) );

/**
* @name scumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scumin}
*/
setReadOnly( ns, 'scumin', require( '@stdlib/stats-base-ndarray-scumin' ) );

/**
* @name smax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smax}
*/
setReadOnly( ns, 'smax', require( '@stdlib/stats-base-ndarray-smax' ) );

/**
* @name smin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smin}
*/
setReadOnly( ns, 'smin', require( '@stdlib/stats-base-ndarray-smin' ) );

/**
* @name srange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/srange}
*/
setReadOnly( ns, 'srange', require( '@stdlib/stats-base-ndarray-srange' ) );

/**
* @name sztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sztest}
*/
setReadOnly( ns, 'sztest', require( '@stdlib/stats-base-ndarray-sztest' ) );

/**
* @name sztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sztest2}
*/
setReadOnly( ns, 'sztest2', require( '@stdlib/stats-base-ndarray-sztest2' ) );

/**
* @name ztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/ztest}
*/
setReadOnly( ns, 'ztest', require( '@stdlib/stats-base-ndarray-ztest' ) );

/**
* @name ztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/ztest2}
*/
setReadOnly( ns, 'ztest2', require( '@stdlib/stats-base-ndarray-ztest2' ) );


// EXPORTS //

module.exports = ns;
