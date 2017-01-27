"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "plough",
			"path": "plough/plough.js",
			"file": "plough.js",
			"module": "plough",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/plough.git",
			"test": "plough-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Flatten arrays
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"decrease": "decrease",
			"doubt": "doubt",
			"harden": "harden",
			"raze": "raze"
		}
	@end-include
*/

var arid = require("arid");
var decrease = require("decrease");
var doubt = require("doubt");
var harden = require("harden");
var raze = require("raze");

var plough = function plough(array) {
	/*;
 	@meta-configuration:
 		{
 			"array:required": [
 				"[*]",
 				"..."
 			]
 		}
 	@end-meta-configuration
 */

	array = raze(arguments);

	if (arid(array)) {
		array = doubt(this, ARRAY) ? this : [];
	}

	if (doubt(this, ARRAY) && array != this) {
		array = this.concat(array);
	}

	var list = decrease(array, function flatten(previous, current) {
		var element = doubt(current, AS_ARRAY) ? plough.apply(null, current) : current;

		return previous.concat(element);
	}, []);

	harden("plough", plough.bind(list), list);

	return list;
};

module.exports = plough;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsb3VnaC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImRlY3JlYXNlIiwiZG91YnQiLCJoYXJkZW4iLCJyYXplIiwicGxvdWdoIiwiYXJyYXkiLCJhcmd1bWVudHMiLCJBUlJBWSIsImNvbmNhdCIsImxpc3QiLCJmbGF0dGVuIiwicHJldmlvdXMiLCJjdXJyZW50IiwiZWxlbWVudCIsIkFTX0FSUkFZIiwiYXBwbHkiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsV0FBV0QsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1LLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEM7Ozs7Ozs7Ozs7O0FBV0FBLFNBQVFGLEtBQU1HLFNBQU4sQ0FBUjs7QUFFQSxLQUFJUixLQUFNTyxLQUFOLENBQUosRUFBbUI7QUFDbEJBLFVBQVFKLE1BQU8sSUFBUCxFQUFhTSxLQUFiLElBQXNCLElBQXRCLEdBQTZCLEVBQXJDO0FBQ0E7O0FBRUQsS0FBSU4sTUFBTyxJQUFQLEVBQWFNLEtBQWIsS0FBd0JGLFNBQVMsSUFBckMsRUFBMkM7QUFDMUNBLFVBQVEsS0FBS0csTUFBTCxDQUFhSCxLQUFiLENBQVI7QUFDQTs7QUFFRCxLQUFJSSxPQUFPVCxTQUFVSyxLQUFWLEVBQWlCLFNBQVNLLE9BQVQsQ0FBa0JDLFFBQWxCLEVBQTRCQyxPQUE1QixFQUFxQztBQUNoRSxNQUFJQyxVQUFVWixNQUFPVyxPQUFQLEVBQWdCRSxRQUFoQixJQUE0QlYsT0FBT1csS0FBUCxDQUFjLElBQWQsRUFBb0JILE9BQXBCLENBQTVCLEdBQTREQSxPQUExRTs7QUFFQSxTQUFPRCxTQUFTSCxNQUFULENBQWlCSyxPQUFqQixDQUFQO0FBQ0EsRUFKVSxFQUlSLEVBSlEsQ0FBWDs7QUFNQVgsUUFBUSxRQUFSLEVBQWtCRSxPQUFPWSxJQUFQLENBQWFQLElBQWIsQ0FBbEIsRUFBdUNBLElBQXZDOztBQUVBLFFBQU9BLElBQVA7QUFDQSxDQS9CRDs7QUFpQ0FRLE9BQU9DLE9BQVAsR0FBaUJkLE1BQWpCIiwiZmlsZSI6InBsb3VnaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwbG91Z2gvcGxvdWdoLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJwbG91Z2guanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcGxvdWdoLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicGxvdWdoLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RmxhdHRlbiBhcnJheXNcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiZGVjcmVhc2VcIjogXCJkZWNyZWFzZVwiLFxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgZGVjcmVhc2UgPSByZXF1aXJlKCBcImRlY3JlYXNlXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcblxuY29uc3QgcGxvdWdoID0gZnVuY3Rpb24gcGxvdWdoKCBhcnJheSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIlsqXVwiLFxuXHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0YXJyYXkgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggYXJpZCggYXJyYXkgKSApe1xuXHRcdGFycmF5ID0gZG91YnQoIHRoaXMsIEFSUkFZICk/IHRoaXMgOiBbIF07XG5cdH1cblxuXHRpZiggZG91YnQoIHRoaXMsIEFSUkFZICkgJiYgYXJyYXkgIT0gdGhpcyApe1xuXHRcdGFycmF5ID0gdGhpcy5jb25jYXQoIGFycmF5ICk7XG5cdH1cblxuXHRsZXQgbGlzdCA9IGRlY3JlYXNlKCBhcnJheSwgZnVuY3Rpb24gZmxhdHRlbiggcHJldmlvdXMsIGN1cnJlbnQgKXtcblx0XHRsZXQgZWxlbWVudCA9IGRvdWJ0KCBjdXJyZW50LCBBU19BUlJBWSApPyBwbG91Z2guYXBwbHkoIG51bGwsIGN1cnJlbnQgKSA6IGN1cnJlbnQ7XG5cblx0XHRyZXR1cm4gcHJldmlvdXMuY29uY2F0KCBlbGVtZW50ICk7XG5cdH0sIFsgXSApO1xuXG5cdGhhcmRlbiggXCJwbG91Z2hcIiwgcGxvdWdoLmJpbmQoIGxpc3QgKSwgbGlzdCApO1xuXG5cdHJldHVybiBsaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbG91Z2g7XG4iXX0=
