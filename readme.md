 1. clone
 2. `node index.js`
 
# Before `npm dedupe`
 
```
➜  __time-require-babel-6 git:(master) ✗ node index.js 


Start time: (2015-11-15 23:40:58 UTC) [treshold=1%]
  #  module                                                                                                     time  %
  1  ../util (node_modules/babel-core/lib/util.js)                                                              48ms  ▇▇ 1%
  2  ./replacement (node_modules/babel-core/node_modules/babel-traverse/lib/path/replacement.js)                43ms  ▇▇ 1%
  3  ./path (node_modules/babel-core/node_modules/babel-traverse/lib/path/index.js)                             82ms  ▇▇▇ 2%
  4  ./context (node_modules/babel-core/node_modules/babel-traverse/lib/context.js)                             83ms  ▇▇▇ 2%
  5  babel-traverse (node_modules/babel-core/node_modules/babel-traverse/lib/index.js)                          89ms  ▇▇▇ 2%
  6  ./converters (node_modules/babel-core/node_modules/babel-types/lib/converters.js)                          93ms  ▇▇▇ 3%
  7  babel-types (node_modules/babel-core/node_modules/babel-types/lib/index.js)                               160ms  ▇▇▇▇▇ 4%
  8  ./file (node_modules/babel-core/lib/transformation/file/index.js)                                          52ms  ▇▇ 1%
  9  ../transformation/pipeline (node_modules/babel-core/lib/transformation/pipeline.js)                        54ms  ▇▇ 1%
 10  ./lib/api/node.js (node_modules/babel-core/lib/api/node.js)                                               297ms  ▇▇▇▇▇▇▇▇▇ 8%
 11  babel-core (node_modules/babel-core/index.js)                                                             298ms  ▇▇▇▇▇▇▇▇▇ 8%
 12  ./replacement (node_modules/babel-preset-stage-3/no...de_modules/babel-traverse/lib/path/replacement.js)   44ms  ▇▇ 1%
 13  ./path (node_modules/babel-preset-stage-3/node_modu...tor/node_modules/babel-traverse/lib/path/index.js)  102ms  ▇▇▇ 3%
 14  ./context (node_modules/babel-preset-stage-3/node_m...erator/node_modules/babel-traverse/lib/context.js)  104ms  ▇▇▇ 3%
 15  babel-traverse (node_modules/babel-preset-stage-3/n...enerator/node_modules/babel-traverse/lib/index.js)  118ms  ▇▇▇▇ 3%
 16  ./converters (node_modules/babel-preset-stage-3/nod...erator/node_modules/babel-types/lib/converters.js)  125ms  ▇▇▇▇ 3%
 17  babel-types (node_modules/babel-preset-stage-3/node...o-generator/node_modules/babel-types/lib/index.js)  240ms  ▇▇▇▇▇▇▇ 7%
 18  babel-helper-get-function-arity (node_modules/babel...ules/babel-helper-get-function-arity/lib/index.js)  241ms  ▇▇▇▇▇▇▇ 7%
 19  babel-template (node_modules/babel-preset-stage-3/n...enerator/node_modules/babel-template/lib/index.js)   55ms  ▇▇ 2%
 20  babel-helper-function-name (node_modules/babel-pres...e_modules/babel-helper-function-name/lib/index.js)  298ms  ▇▇▇▇▇▇▇▇▇ 8%
 21  babel-helper-remap-async-to-generator (node_modules...abel-helper-remap-async-to-generator/lib/index.js)  299ms  ▇▇▇▇▇▇▇▇▇ 8%
 22  babel-plugin-transform-async-to-generator (node_mod...-plugin-transform-async-to-generator/lib/index.js)  300ms  ▇▇▇▇▇▇▇▇▇ 8%
 23  ./replacement (node_modules/babel-preset-stage-3/no...de_modules/babel-traverse/lib/path/replacement.js)   44ms  ▇▇ 1%
 24  ./path (node_modules/babel-preset-stage-3/node_modu...pes/node_modules/babel-traverse/lib/path/index.js)   93ms  ▇▇▇ 3%
 25  ./context (node_modules/babel-preset-stage-3/node_m...-types/node_modules/babel-traverse/lib/context.js)   96ms  ▇▇▇ 3%
 26  babel-traverse (node_modules/babel-preset-stage-3/n...el-types/node_modules/babel-traverse/lib/index.js)  102ms  ▇▇▇ 3%
 27  ./converters (node_modules/babel-preset-stage-3/nod...isitor/node_modules/babel-types/lib/converters.js)  109ms  ▇▇▇▇ 3%
 28  babel-types (node_modules/babel-preset-stage-3/node...tor-visitor/node_modules/babel-types/lib/index.js)  226ms  ▇▇▇▇▇▇▇ 6%
 29  babel-helper-explode-assignable-expression (node_mo...helper-explode-assignable-expression/lib/index.js)  227ms  ▇▇▇▇▇▇▇ 6%
 30  babel-helper-builder-binary-assignment-operator-vis...r-binary-assignment-operator-visitor/lib/index.js)  228ms  ▇▇▇▇▇▇▇ 6%
 31  babel-plugin-transform-exponentiation-operator (nod...in-transform-exponentiation-operator/lib/index.js)  229ms  ▇▇▇▇▇▇▇ 6%
 32  /Users/jamestalmage/work/src/github.com/jamestalmag...ex.js (node_modules/babel-preset-stage-3/index.js)  529ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 15%
 33  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   37ms  ▇▇ 1%
 34  ./path (node_modules/babel-preset-es2015/node_modul...pes/node_modules/babel-traverse/lib/path/index.js)   77ms  ▇▇▇ 2%
 35  ./context (node_modules/babel-preset-es2015/node_mo...-types/node_modules/babel-traverse/lib/context.js)   79ms  ▇▇▇ 2%
 36  babel-traverse (node_modules/babel-preset-es2015/no...el-types/node_modules/babel-traverse/lib/index.js)   86ms  ▇▇▇ 2%
 37  ./converters (node_modules/babel-preset-es2015/node...n-name/node_modules/babel-types/lib/converters.js)   91ms  ▇▇▇ 2%
 38  babel-types (node_modules/babel-preset-es2015/node_...nction-name/node_modules/babel-types/lib/index.js)  173ms  ▇▇▇▇▇ 5%
 39  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   44ms  ▇▇ 1%
 40  ./path (node_modules/babel-preset-es2015/node_modul...ame/node_modules/babel-traverse/lib/path/index.js)  101ms  ▇▇▇ 3%
 41  ./context (node_modules/babel-preset-es2015/node_mo...n-name/node_modules/babel-traverse/lib/context.js)  102ms  ▇▇▇ 3%
 42  babel-traverse (node_modules/babel-preset-es2015/no...ion-name/node_modules/babel-traverse/lib/index.js)  115ms  ▇▇▇▇ 3%
 43  babel-template (node_modules/babel-preset-es2015/no...ion-name/node_modules/babel-template/lib/index.js)  168ms  ▇▇▇▇▇ 5%
 44  babel-helper-function-name (node_modules/babel-pres...e_modules/babel-helper-function-name/lib/index.js)  170ms  ▇▇▇▇▇ 5%
 45  babel-plugin-transform-es2015-function-name (node_m...lugin-transform-es2015-function-name/lib/index.js)  369ms  ▇▇▇▇▇▇▇▇▇▇▇ 10%
 46  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   52ms  ▇▇ 1%
 47  ./path (node_modules/babel-preset-es2015/node_modul...ses/node_modules/babel-traverse/lib/path/index.js)  115ms  ▇▇▇▇ 3%
 48  ./context (node_modules/babel-preset-es2015/node_mo...lasses/node_modules/babel-traverse/lib/context.js)  116ms  ▇▇▇▇ 3%
 49  babel-traverse (node_modules/babel-preset-es2015/no...-classes/node_modules/babel-traverse/lib/index.js)  129ms  ▇▇▇▇ 4%
 50  ./converters (node_modules/babel-preset-es2015/node...lasses/node_modules/babel-types/lib/converters.js)  134ms  ▇▇▇▇ 4%
 51  babel-types (node_modules/babel-preset-es2015/node_...015-classes/node_modules/babel-types/lib/index.js)  217ms  ▇▇▇▇▇▇▇ 6%
 52  babel-helper-get-function-arity (node_modules/babel...ules/babel-helper-get-function-arity/lib/index.js)  218ms  ▇▇▇▇▇▇▇ 6%
 53  babel-template (node_modules/babel-preset-es2015/no...-classes/node_modules/babel-template/lib/index.js)   45ms  ▇▇ 1%
 54  babel-helper-function-name (node_modules/babel-pres...e_modules/babel-helper-function-name/lib/index.js)  265ms  ▇▇▇▇▇▇▇▇ 7%
 55  ./loose (node_modules/babel-preset-es2015/node_modu...abel-plugin-transform-es2015-classes/lib/loose.js)  294ms  ▇▇▇▇▇▇▇▇▇ 8%
 56  babel-plugin-transform-es2015-classes (node_modules...abel-plugin-transform-es2015-classes/lib/index.js)  313ms  ▇▇▇▇▇▇▇▇▇ 9%
 57  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   41ms  ▇▇ 1%
 58  ./path (node_modules/babel-preset-es2015/node_modul...ers/node_modules/babel-traverse/lib/path/index.js)   97ms  ▇▇▇ 3%
 59  ./context (node_modules/babel-preset-es2015/node_mo...supers/node_modules/babel-traverse/lib/context.js)   98ms  ▇▇▇ 3%
 60  babel-traverse (node_modules/babel-preset-es2015/no...e-supers/node_modules/babel-traverse/lib/index.js)  111ms  ▇▇▇▇ 3%
 61  ./converters (node_modules/babel-preset-es2015/node...supers/node_modules/babel-types/lib/converters.js)  117ms  ▇▇▇▇ 3%
 62  babel-types (node_modules/babel-preset-es2015/node_...lace-supers/node_modules/babel-types/lib/index.js)  191ms  ▇▇▇▇▇▇ 5%
 63  babel-helper-optimise-call-expression (node_modules...abel-helper-optimise-call-expression/lib/index.js)  192ms  ▇▇▇▇▇▇ 5%
 64  babel-helper-replace-supers (node_modules/babel-pre..._modules/babel-helper-replace-supers/lib/index.js)  197ms  ▇▇▇▇▇▇ 5%
 65  babel-plugin-transform-es2015-object-super (node_mo...plugin-transform-es2015-object-super/lib/index.js)  223ms  ▇▇▇▇▇▇▇ 6%
 66  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   45ms  ▇▇ 1%
 67  ./path (node_modules/babel-preset-es2015/node_modul...pes/node_modules/babel-traverse/lib/path/index.js)   89ms  ▇▇▇ 2%
 68  ./context (node_modules/babel-preset-es2015/node_mo...-types/node_modules/babel-traverse/lib/context.js)   91ms  ▇▇▇ 2%
 69  babel-traverse (node_modules/babel-preset-es2015/no...el-types/node_modules/babel-traverse/lib/index.js)   97ms  ▇▇▇ 3%
 70  ./converters (node_modules/babel-preset-es2015/node...erties/node_modules/babel-types/lib/converters.js)  102ms  ▇▇▇ 3%
 71  babel-types (node_modules/babel-preset-es2015/node_...-properties/node_modules/babel-types/lib/index.js)  204ms  ▇▇▇▇▇▇ 6%
 72  babel-plugin-transform-es2015-shorthand-properties...ransform-es2015-shorthand-properties/lib/index.js)   204ms  ▇▇▇▇▇▇ 6%
 73  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   37ms  ▇▇ 1%
 74  ./path (node_modules/babel-preset-es2015/node_modul...pes/node_modules/babel-traverse/lib/path/index.js)   74ms  ▇▇▇ 2%
 75  ./context (node_modules/babel-preset-es2015/node_mo...-types/node_modules/babel-traverse/lib/context.js)   75ms  ▇▇▇ 2%
 76  babel-traverse (node_modules/babel-preset-es2015/no...el-types/node_modules/babel-traverse/lib/index.js)   81ms  ▇▇▇ 2%
 77  ./converters (node_modules/babel-preset-es2015/node...-regex/node_modules/babel-types/lib/converters.js)   86ms  ▇▇▇ 2%
 78  babel-types (node_modules/babel-preset-es2015/node_...ticky-regex/node_modules/babel-types/lib/index.js)  183ms  ▇▇▇▇▇▇ 5%
 79  babel-helper-regex (node_modules/babel-preset-es201...egex/node_modules/babel-helper-regex/lib/index.js)  185ms  ▇▇▇▇▇▇ 5%
 80  babel-plugin-transform-es2015-sticky-regex (node_mo...plugin-transform-es2015-sticky-regex/lib/index.js)  186ms  ▇▇▇▇▇▇ 5%
 81  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   40ms  ▇▇ 1%
 82  ./path (node_modules/babel-preset-es2015/node_modul...pes/node_modules/babel-traverse/lib/path/index.js)   80ms  ▇▇▇ 2%
 83  ./context (node_modules/babel-preset-es2015/node_mo...-types/node_modules/babel-traverse/lib/context.js)   82ms  ▇▇▇ 2%
 84  babel-traverse (node_modules/babel-preset-es2015/no...el-types/node_modules/babel-traverse/lib/index.js)   88ms  ▇▇▇ 2%
 85  ./converters (node_modules/babel-preset-es2015/node...-regex/node_modules/babel-types/lib/converters.js)   93ms  ▇▇▇ 3%
 86  babel-types (node_modules/babel-preset-es2015/node_...elper-regex/node_modules/babel-types/lib/index.js)  189ms  ▇▇▇▇▇▇ 5%
 87  babel-helper-regex (node_modules/babel-preset-es201...egex/node_modules/babel-helper-regex/lib/index.js)  192ms  ▇▇▇▇▇▇ 5%
 88  babel-plugin-transform-es2015-unicode-regex (node_m...lugin-transform-es2015-unicode-regex/lib/index.js)  210ms  ▇▇▇▇▇▇ 6%
 89  babel-types (node_modules/babel-preset-es2015/node_...-parameters/node_modules/babel-types/lib/index.js)   80ms  ▇▇▇ 2%
 90  ./lib/virtual-types (node_modules/babel-preset-es20...ules/babel-traverse/lib/path/lib/virtual-types.js)   81ms  ▇▇▇ 2%
 91  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   38ms  ▇▇ 1%
 92  ./path (node_modules/babel-preset-es2015/node_modul...ers/node_modules/babel-traverse/lib/path/index.js)  167ms  ▇▇▇▇▇ 5%
 93  ./context (node_modules/babel-preset-es2015/node_mo...meters/node_modules/babel-traverse/lib/context.js)  168ms  ▇▇▇▇▇ 5%
 94  babel-traverse (node_modules/babel-preset-es2015/no...rameters/node_modules/babel-traverse/lib/index.js)  188ms  ▇▇▇▇▇▇ 5%
 95  babel-template (node_modules/babel-preset-es2015/no...rameters/node_modules/babel-template/lib/index.js)   47ms  ▇▇ 1%
 96  ./default (node_modules/babel-preset-es2015/node_mo...plugin-transform-es2015-parameters/lib/default.js)   50ms  ▇▇ 1%
 97  babel-plugin-transform-es2015-parameters (node_modu...l-plugin-transform-es2015-parameters/lib/index.js)  260ms  ▇▇▇▇▇▇▇▇ 7%
 98  babel-types (node_modules/babel-preset-es2015/node_...ock-scoping/node_modules/babel-types/lib/index.js)   72ms  ▇▇▇ 2%
 99  ./lib/virtual-types (node_modules/babel-preset-es20...ules/babel-traverse/lib/path/lib/virtual-types.js)   73ms  ▇▇▇ 2%
100  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   38ms  ▇▇ 1%
101  ./path (node_modules/babel-preset-es2015/node_modul...ing/node_modules/babel-traverse/lib/path/index.js)  143ms  ▇▇▇▇▇ 4%
102  ./context (node_modules/babel-preset-es2015/node_mo...coping/node_modules/babel-traverse/lib/context.js)  144ms  ▇▇▇▇▇ 4%
103  babel-traverse (node_modules/babel-preset-es2015/no...-scoping/node_modules/babel-traverse/lib/index.js)  159ms  ▇▇▇▇▇ 4%
104  babel-template (node_modules/babel-preset-es2015/no...-scoping/node_modules/babel-template/lib/index.js)   37ms  ▇▇ 1%
105  babel-plugin-transform-es2015-block-scoping (node_m...lugin-transform-es2015-block-scoping/lib/index.js)  218ms  ▇▇▇▇▇▇▇ 6%
106  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   37ms  ▇▇ 1%
107  ./path (node_modules/babel-preset-es2015/node_modul...pes/node_modules/babel-traverse/lib/path/index.js)   76ms  ▇▇▇ 2%
108  ./context (node_modules/babel-preset-es2015/node_mo...-types/node_modules/babel-traverse/lib/context.js)   77ms  ▇▇▇ 2%
109  babel-traverse (node_modules/babel-preset-es2015/no...el-types/node_modules/babel-traverse/lib/index.js)   82ms  ▇▇▇ 2%
110  ./converters (node_modules/babel-preset-es2015/node...mmonjs/node_modules/babel-types/lib/converters.js)   87ms  ▇▇▇ 2%
111  babel-types (node_modules/babel-preset-es2015/node_...es-commonjs/node_modules/babel-types/lib/index.js)  156ms  ▇▇▇▇▇ 4%
112  ./lib/virtual-types (node_modules/babel-preset-es20...ules/babel-traverse/lib/path/lib/virtual-types.js)  156ms  ▇▇▇▇▇ 4%
113  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   41ms  ▇▇ 1%
114  ./path (node_modules/babel-preset-es2015/node_modul...ate/node_modules/babel-traverse/lib/path/index.js)  240ms  ▇▇▇▇▇▇▇ 7%
115  ./context (node_modules/babel-preset-es2015/node_mo...mplate/node_modules/babel-traverse/lib/context.js)  241ms  ▇▇▇▇▇▇▇ 7%
116  babel-traverse (node_modules/babel-preset-es2015/no...template/node_modules/babel-traverse/lib/index.js)  248ms  ▇▇▇▇▇▇▇▇ 7%
117  babel-template (node_modules/babel-preset-es2015/no...commonjs/node_modules/babel-template/lib/index.js)  269ms  ▇▇▇▇▇▇▇▇ 7%
118  babel-plugin-transform-es2015-modules-commonjs (nod...in-transform-es2015-modules-commonjs/lib/index.js)  301ms  ▇▇▇▇▇▇▇▇▇ 8%
119  /Users/jamestalmage/work/src/github.com/jamestalmag...dex.js (node_modules/babel-preset-es2015/index.js)   2.4s  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 67%
120  ./replacement (node_modules/babel-preset-es2015/nod...de_modules/babel-traverse/lib/path/replacement.js)   44ms  ▇▇ 1%
121  ./path (node_modules/babel-preset-es2015/node_modul...tor/node_modules/babel-traverse/lib/path/index.js)   92ms  ▇▇▇ 3%
122  ./context (node_modules/babel-preset-es2015/node_mo...erator/node_modules/babel-traverse/lib/context.js)   93ms  ▇▇▇ 3%
123  babel-traverse (node_modules/babel-preset-es2015/no...enerator/node_modules/babel-traverse/lib/index.js)  104ms  ▇▇▇ 3%
124  ./converters (node_modules/babel-preset-es2015/node...erator/node_modules/babel-types/lib/converters.js)  109ms  ▇▇▇▇ 3%
125  babel-types (node_modules/babel-preset-es2015/node_...regenerator/node_modules/babel-types/lib/index.js)  211ms  ▇▇▇▇▇▇ 6%
126  ./visit (node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/visit.js)   219ms  ▇▇▇▇▇▇▇ 6%
Total require(): 10304
Total time: 3.6s
```

# After `npm dedupe`

```
➜  __time-require-babel-6 git:(master) node index.js 


Start time: (2015-11-15 23:55:04 UTC) [treshold=1%]
 #  module                                                                                                     time  %
 1  ./$.iter-define (node_modules/babel-runtime/node_modules/core-js/library/modules/$.iter-define.js)         13ms  ▇▇ 2%
 2  ./es6.array.iterator (node_modules/babel-runtime/no...les/core-js/library/modules/es6.array.iterator.js)   18ms  ▇▇▇ 2%
 3  ../modules/web.dom.iterable (node_modules/babel-run...dules/core-js/library/modules/web.dom.iterable.js)   19ms  ▇▇▇ 2%
 4  core-js/library/fn/get-iterator (node_modules/babel...e/node_modules/core-js/library/fn/get-iterator.js)   24ms  ▇▇▇ 3%
 5  babel-runtime/core-js/get-iterator (node_modules/babel-runtime/core-js/get-iterator.js)                    24ms  ▇▇▇ 3%
 6  ./includes (node_modules/lodash/collection/includes.js)                                                    10ms  ▇▇ 1%
 7  lodash/collection/contains (node_modules/lodash/collection/contains.js)                                    10ms  ▇▇ 1%
 8  ../util (node_modules/babel-core/lib/util.js)                                                              46ms  ▇▇▇▇▇▇ 5%
 9  ./$.iter-define (node_modules/babel-types/node_modu..._modules/core-js/library/modules/$.iter-define.js)    9ms  ▇▇ 1%
10  ./es6.array.iterator (node_modules/babel-types/node...les/core-js/library/modules/es6.array.iterator.js)   12ms  ▇▇ 1%
11  ../modules/web.dom.iterable (node_modules/babel-typ...dules/core-js/library/modules/web.dom.iterable.js)   12ms  ▇▇ 1%
12  core-js/library/fn/get-iterator (node_modules/babel...e/node_modules/core-js/library/fn/get-iterator.js)   19ms  ▇▇▇ 2%
13  babel-runtime/core-js/get-iterator (node_modules/ba...ode_modules/babel-runtime/core-js/get-iterator.js)   19ms  ▇▇▇ 2%
14  ./baseAssign (node_modules/babel-types/node_modules/lodash/internal/baseAssign.js)                          9ms  ▇▇ 1%
15  ../internal/baseClone (node_modules/babel-types/node_modules/lodash/internal/baseClone.js)                 14ms  ▇▇ 2%
16  lodash/lang/clone (node_modules/babel-types/node_modules/lodash/lang/clone.js)                             17ms  ▇▇▇ 2%
17  ../internal/baseCallback (node_modules/babel-types/node_modules/lodash/internal/baseCallback.js)           12ms  ▇▇ 1%
18  lodash/array/uniq (node_modules/babel-types/node_modules/lodash/array/uniq.js)                             15ms  ▇▇ 2%
19  ./core (node_modules/babel-types/lib/definitions/core.js)                                                  12ms  ▇▇ 1%
20  ./definitions/init (node_modules/babel-types/lib/definitions/init.js)                                      20ms  ▇▇▇ 2%
21  ../scope (node_modules/babel-types/node_modules/babel-traverse/lib/scope/index.js)                         15ms  ▇▇ 2%
22  babel-code-frame (node_modules/babel-types/node_mod...averse/node_modules/babel-code-frame/lib/index.js)    9ms  ▇▇ 1%
23  ./parser (node_modules/babel-types/node_modules/bab...traverse/node_modules/babylon/lib/parser/index.js)   12ms  ▇▇ 1%
24  ./parser/statement (node_modules/babel-types/node_m...erse/node_modules/babylon/lib/parser/statement.js)   10ms  ▇▇ 1%
25  babylon (node_modules/babel-types/node_modules/babel-traverse/node_modules/babylon/lib/index.js)           35ms  ▇▇▇▇▇ 4%
26  ./replacement (node_modules/babel-types/node_modules/babel-traverse/lib/path/replacement.js)               45ms  ▇▇▇▇▇▇ 5%
27  ./path (node_modules/babel-types/node_modules/babel-traverse/lib/path/index.js)                            85ms  ▇▇▇▇▇▇▇▇▇▇▇ 10%
28  ./context (node_modules/babel-types/node_modules/babel-traverse/lib/context.js)                            87ms  ▇▇▇▇▇▇▇▇▇▇▇ 10%
29  babel-traverse (node_modules/babel-types/node_modules/babel-traverse/lib/index.js)                         91ms  ▇▇▇▇▇▇▇▇▇▇▇▇ 11%
30  ./converters (node_modules/babel-types/lib/converters.js)                                                  96ms  ▇▇▇▇▇▇▇▇▇▇▇▇ 11%
31  babel-types (node_modules/babel-types/lib/index.js)                                                       200ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 24%
32  ./$.iter-define (node_modules/babel-traverse/node_m..._modules/core-js/library/modules/$.iter-define.js)    9ms  ▇▇ 1%
33  ./es6.array.iterator (node_modules/babel-traverse/n...les/core-js/library/modules/es6.array.iterator.js)   13ms  ▇▇ 2%
34  ../modules/web.dom.iterable (node_modules/babel-tra...dules/core-js/library/modules/web.dom.iterable.js)   13ms  ▇▇ 2%
35  core-js/library/fn/get-iterator (node_modules/babel...e/node_modules/core-js/library/fn/get-iterator.js)   18ms  ▇▇▇ 2%
36  babel-runtime/core-js/get-iterator (node_modules/ba...ode_modules/babel-runtime/core-js/get-iterator.js)   18ms  ▇▇▇ 2%
37  ../internal/baseClone (node_modules/babel-traverse/node_modules/lodash/internal/baseClone.js)              12ms  ▇▇ 1%
38  lodash/lang/clone (node_modules/babel-traverse/node_modules/lodash/lang/clone.js)                          14ms  ▇▇ 2%
39  ../internal/baseCallback (node_modules/babel-traverse/node_modules/lodash/internal/baseCallback.js)        12ms  ▇▇ 1%
40  lodash/array/uniq (node_modules/babel-traverse/node_modules/lodash/array/uniq.js)                          16ms  ▇▇ 2%
41  ./definitions/init (node_modules/babel-traverse/node_modules/babel-types/lib/definitions/init.js)          12ms  ▇▇ 1%
42  babel-types (node_modules/babel-traverse/node_modules/babel-types/lib/index.js)                            74ms  ▇▇▇▇▇▇▇▇▇▇ 9%
43  ./lib/virtual-types (node_modules/babel-traverse/lib/path/lib/virtual-types.js)                            75ms  ▇▇▇▇▇▇▇▇▇▇ 9%
44  ../scope (node_modules/babel-traverse/lib/scope/index.js)                                                  11ms  ▇▇ 1%
45  babel-code-frame (node_modules/babel-traverse/node_modules/babel-code-frame/lib/index.js)                  11ms  ▇▇ 1%
46  ./parser (node_modules/babel-traverse/node_modules/babylon/lib/parser/index.js)                            14ms  ▇▇ 2%
47  babylon (node_modules/babel-traverse/node_modules/babylon/lib/index.js)                                    31ms  ▇▇▇▇ 4%
48  ./replacement (node_modules/babel-traverse/lib/path/replacement.js)                                        43ms  ▇▇▇▇▇▇ 5%
49  ./path (node_modules/babel-traverse/lib/path/index.js)                                                    155ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 19%
50  ./context (node_modules/babel-traverse/lib/context.js)                                                    156ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 19%
51  babel-traverse (node_modules/babel-traverse/lib/index.js)                                                 184ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 22%
52  core-js/library/fn/map (node_modules/babel-runtime/node_modules/core-js/library/fn/map.js)                 10ms  ▇▇ 1%
53  babel-runtime/core-js/map (node_modules/babel-runtime/core-js/map.js)                                      10ms  ▇▇ 1%
54  ../store (node_modules/babel-core/lib/store.js)                                                            11ms  ▇▇ 1%
55  ../../plugin (node_modules/babel-core/lib/transformation/plugin.js)                                        24ms  ▇▇▇ 3%
56  ../transformation/file/options/option-manager (node...lib/transformation/file/options/option-manager.js)   37ms  ▇▇▇▇▇ 4%
57  ./es6.array.iterator (node_modules/babylon/node_mod...les/core-js/library/modules/es6.array.iterator.js)   10ms  ▇▇ 1%
58  ../modules/web.dom.iterable (node_modules/babylon/n...dules/core-js/library/modules/web.dom.iterable.js)   10ms  ▇▇ 1%
59  core-js/library/fn/get-iterator (node_modules/babyl...e/node_modules/core-js/library/fn/get-iterator.js)   13ms  ▇▇ 2%
60  babel-runtime/core-js/get-iterator (node_modules/ba...ode_modules/babel-runtime/core-js/get-iterator.js)   14ms  ▇▇ 2%
61  ./parser (node_modules/babylon/lib/parser/index.js)                                                        30ms  ▇▇▇▇ 4%
62  babylon (node_modules/babylon/lib/index.js)                                                                43ms  ▇▇▇▇▇▇ 5%
63  babel-template (node_modules/babel-template/lib/index.js)                                                  52ms  ▇▇▇▇▇▇▇ 6%
64  ./helpers (node_modules/babel-core/node_modules/babel-helpers/lib/helpers.js)                              58ms  ▇▇▇▇▇▇▇▇ 7%
65  babel-helpers (node_modules/babel-core/node_modules/babel-helpers/lib/index.js)                            61ms  ▇▇▇▇▇▇▇▇ 7%
66  ./whitespace (node_modules/babel-core/node_modules/babel-generator/lib/node/whitespace.js)                 14ms  ▇▇ 2%
67  ./node (node_modules/babel-core/node_modules/babel-generator/lib/node/index.js)                            17ms  ▇▇▇ 2%
68  ./printer (node_modules/babel-core/node_modules/babel-generator/lib/printer.js)                            33ms  ▇▇▇▇▇ 4%
69  babel-generator (node_modules/babel-core/node_modules/babel-generator/lib/index.js)                        39ms  ▇▇▇▇▇ 5%
70  babel-code-frame (node_modules/babel-core/node_modules/babel-code-frame/lib/index.js)                      11ms  ▇▇ 1%
71  ./file (node_modules/babel-core/lib/transformation/file/index.js)                                         133ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 16%
72  ../transformation/pipeline (node_modules/babel-core/lib/transformation/pipeline.js)                       134ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 16%
73  ./lib/api/node.js (node_modules/babel-core/lib/api/node.js)                                               609ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 73%
74  babel-core (node_modules/babel-core/index.js)                                                             610ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 73%
75  babel-plugin-transform-es2015-classes (node_modules...abel-plugin-transform-es2015-classes/lib/index.js)   10ms  ▇▇ 1%
76  regexpu/rewrite-pattern (node_modules/babel-preset-...ode-regex/node_modules/regexpu/rewrite-pattern.js)   16ms  ▇▇ 2%
77  babel-plugin-transform-es2015-unicode-regex (node_m...lugin-transform-es2015-unicode-regex/lib/index.js)   17ms  ▇▇▇ 2%
78  babel-plugin-transform-es2015-parameters (node_modu...l-plugin-transform-es2015-parameters/lib/index.js)   10ms  ▇▇ 1%
79  /Users/jamestalmage/work/src/github.com/jamestalmag...dex.js (node_modules/babel-preset-es2015/index.js)   62ms  ▇▇▇▇▇▇▇▇ 7%
80  ./visit (node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-regenerator/lib/visit.js)    10ms  ▇▇ 1%
Total require(): 2180
Total time: 837ms
```
