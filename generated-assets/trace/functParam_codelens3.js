if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["functParam_codelens3"] = {"code": "def print_twice(bruce):\n    print(bruce)\n    print(bruce)\n\nmichael = 'Python is cool.'\nprint_twice(michael)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"print_twice": ["REF", 1]}, "ordered_globals": ["print_twice"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "print_twice(bruce)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"print_twice": ["REF", 1], "michael": "Python is cool."}, "ordered_globals": ["print_twice", "michael"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "print_twice(bruce)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "print_twice", "globals": {"print_twice": ["REF", 1], "michael": "Python is cool."}, "ordered_globals": ["print_twice", "michael"], "stack_to_render": [{"func_name": "print_twice", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"bruce": "Python is cool."}, "ordered_varnames": ["bruce"], "is_zombie": false, "is_highlighted": true, "unique_hash": "print_twice_f1"}], "heap": {"1": ["FUNCTION", "print_twice(bruce)", null]}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "print_twice", "globals": {"print_twice": ["REF", 1], "michael": "Python is cool."}, "ordered_globals": ["print_twice", "michael"], "stack_to_render": [{"func_name": "print_twice", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"bruce": "Python is cool."}, "ordered_varnames": ["bruce"], "is_zombie": false, "is_highlighted": true, "unique_hash": "print_twice_f1"}], "heap": {"1": ["FUNCTION", "print_twice(bruce)", null]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "print_twice", "globals": {"print_twice": ["REF", 1], "michael": "Python is cool."}, "ordered_globals": ["print_twice", "michael"], "stack_to_render": [{"func_name": "print_twice", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"bruce": "Python is cool."}, "ordered_varnames": ["bruce"], "is_zombie": false, "is_highlighted": true, "unique_hash": "print_twice_f1"}], "heap": {"1": ["FUNCTION", "print_twice(bruce)", null]}, "stdout": "Python is cool.\n"}, {"line": 3, "event": "return", "func_name": "print_twice", "globals": {"print_twice": ["REF", 1], "michael": "Python is cool."}, "ordered_globals": ["print_twice", "michael"], "stack_to_render": [{"func_name": "print_twice", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"bruce": "Python is cool.", "__return__": null}, "ordered_varnames": ["bruce", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "print_twice_f1"}], "heap": {"1": ["FUNCTION", "print_twice(bruce)", null]}, "stdout": "Python is cool.\nPython is cool.\n"}, {"line": 6, "event": "return", "func_name": "<module>", "globals": {"print_twice": ["REF", 1], "michael": "Python is cool."}, "ordered_globals": ["print_twice", "michael"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "print_twice(bruce)", null]}, "stdout": "Python is cool.\nPython is cool.\n"}]}