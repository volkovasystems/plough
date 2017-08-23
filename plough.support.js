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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"raze": "raze"
              		}
              	@end-include
              */

var arid = require("arid");
var decrease = require("decrease");
var doubt = require("doubt");
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
		return array;
	}

	return decrease(array, function flatten(previous, current) {
		var element = doubt(current, AS_ARRAY) ? plough.apply(null, current) : current;

		return previous.concat(element);
	}, []);
};

module.exports = plough;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsb3VnaC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiZGVjcmVhc2UiLCJkb3VidCIsInJhemUiLCJwbG91Z2giLCJhcnJheSIsImFyZ3VtZW50cyIsImZsYXR0ZW4iLCJwcmV2aW91cyIsImN1cnJlbnQiLCJlbGVtZW50IiwiQVNfQVJSQVkiLCJhcHBseSIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFdBQVdELFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUksU0FBUyxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUN0Qzs7Ozs7Ozs7Ozs7QUFXQUEsU0FBUUYsS0FBTUcsU0FBTixDQUFSOztBQUVBLEtBQUlQLEtBQU1NLEtBQU4sQ0FBSixFQUFtQjtBQUNsQixTQUFPQSxLQUFQO0FBQ0E7O0FBRUQsUUFBT0osU0FBVUksS0FBVixFQUFpQixTQUFTRSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFDNUQsTUFBSUMsVUFBVVIsTUFBT08sT0FBUCxFQUFnQkUsUUFBaEIsSUFBNEJQLE9BQU9RLEtBQVAsQ0FBYyxJQUFkLEVBQW9CSCxPQUFwQixDQUE1QixHQUE0REEsT0FBMUU7O0FBRUEsU0FBT0QsU0FBU0ssTUFBVCxDQUFpQkgsT0FBakIsQ0FBUDtBQUNBLEVBSk0sRUFJSixFQUpJLENBQVA7QUFLQSxDQXZCRDs7QUF5QkFJLE9BQU9DLE9BQVAsR0FBaUJYLE1BQWpCIiwiZmlsZSI6InBsb3VnaC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicGF0aFwiOiBcInBsb3VnaC9wbG91Z2guanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInBsb3VnaC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJwbG91Z2hcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Bsb3VnaC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInBsb3VnaC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEZsYXR0ZW4gYXJyYXlzXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImRlY3JlYXNlXCI6IFwiZGVjcmVhc2VcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgZGVjcmVhc2UgPSByZXF1aXJlKCBcImRlY3JlYXNlXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcblxuY29uc3QgcGxvdWdoID0gZnVuY3Rpb24gcGxvdWdoKCBhcnJheSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIlsqXVwiLFxuXHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0YXJyYXkgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggYXJpZCggYXJyYXkgKSApe1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdHJldHVybiBkZWNyZWFzZSggYXJyYXksIGZ1bmN0aW9uIGZsYXR0ZW4oIHByZXZpb3VzLCBjdXJyZW50ICl7XG5cdFx0bGV0IGVsZW1lbnQgPSBkb3VidCggY3VycmVudCwgQVNfQVJSQVkgKT8gcGxvdWdoLmFwcGx5KCBudWxsLCBjdXJyZW50ICkgOiBjdXJyZW50O1xuXG5cdFx0cmV0dXJuIHByZXZpb3VzLmNvbmNhdCggZWxlbWVudCApO1xuXHR9LCBbIF0gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxvdWdoO1xuIl19
//# sourceMappingURL=plough.support.js.map
