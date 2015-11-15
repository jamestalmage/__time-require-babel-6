 1. clone
 2. `node index.js`
 
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
