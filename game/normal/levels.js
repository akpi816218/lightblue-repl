/* pix.akhilpil0308.repl.co */
const GAME_LEVELS = [`
...............................................................................
...............................................................................
...............................................................................
............................+...+.........#.#...###............................
...........####..#.....#.........+.......#####..#.#............................
...........#.....#.....#.....+...+........#.#...#.#............................
...........#..#..#...............+.......#####..#.#............................
...........####..####..#....+...+.........#.#...###............................
...............................................................................
#++#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
#..v..=.......................................................................#
#.............................................................................#
#..........|.............................................@oooooooooooooooooooo#
#############################################################################o+
............................................................................+o+
............................................................................+o+
.###..###..###.###.##.....###..#...#..##..###..##..#..#..###..#...#..#.###..+o+
.#..#.#.#.#....#...#.#...#...#.##..#..#.#.#.#.#..#.#.#...#..#.#...#..#.#....+o+
.###..###..##..###.#.#...#...#.#.#.#..#.#.###.###..##....###..#...#..#.###..+o+
.#..#.#.#....#.#...#.#...#...#.#..##..#.#.#.#.#.#..#.#...#..#.#...#..#.#.....#.
.###..#.#.###..###.##.....###..#...#..##..#.#.#..#.#..#..###..###..##..###.....
...............................................................................
...............................................................................
`,`
....................................................................................................
...................#.#....#.........................................................................
..................#####...#.........................................................................
...................#.#....#.........................................................................
..................#####...#........................................................................#
.@.................#.#....#........................................................................#
........................................o..........................................................#
+...........................................................o......................................#
#...............#+#...+............................................................................#
#............++.......+.................#+#................###.....................................#
#......#+#.++......................................o......#+++#....................................#
##+..=.....+........o...................+++......#+#....#..#+#.....................................#
#..........+.............................+..................v......................................#
#..........+..o........#+##......#+#..................................o............................#
#...........#+#......+................................................##################...........#
#....................+.................................................................#...........#
#....................+.................................................................#...........#
#.................#+#................................................................#.#.#.........#
#.....................................................................................###..........#
#......................................................................................#...........#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#..................................................................................................#
#...................................................................................................
#.................................................................................................o
#..................................................................................................+
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+
`, `
.......#####.........
...........#.........
.......#####.........
.......#.............
+......#####........#
+....o..............#
#...............o.+.#
#@..................#
####+++#............#
#....++.#.....#.....#
#.......+++..##.o...#
##......++++#..####.#
##.......+..........#
#..o.....v..........#
#...................#
#...................#
#..+................#
#..+................#
#.#+#...............#
#..+#+#######++##+#+#
#....v.......v#..#.v#
#...................#
#...................#
#...................#
#...................#
#...................#
#+#.................#
#++#.....o...o...o..+
#++++#...#...#...#..+
#++++++++++++++++++.#
+++++++++++++++++++.#
#+#################.#
#..........=........#
#...................#
#...................#
#...................#
#.......=...........#
#..###+##o##o#..o#..#
#.....v..#..#####+###
#................v..#
#....o..............#
#....##.............#
###......##.........#
#...........o..#.....
#....##.....#....#...
#..................##
+++++++++++++++++++++
`, `
.......#####.........#....................
...........#.........#....................
.......#####.........#....................
...........#.........#....................
.......#####.........#...................#
.....................#...................#
...@.................#........o..........#
##########...#########........#..........#
.........#=..#.......#....o...|..........#
.....................#...###.............#
###...################...................#
..#=..#..............#...................#
........+.....+......#########|..........#
...+......+..........#........#..........#
............+........#...................#
+....................#.==........=########
........+....+...+...#...................#
...+.................#........o#.........#
.....+.....+.......+.#...................#
.........+....+......#.......#...........#
.....................#...#...............#
.....................##.........+........#
########...###########...................#
.......#=..#.........#########+..+########
.........+...........#.........o.........#
......+.....+........#.......###.........#
.....................#o......===........=#
.....+..+.+..+.......##..++..............#
...............+.....#...................#
########...#########+#########...........#
o.....+#...#........+#...................#
ooooooooooooooooooooo...........##########
##########################################
`, `
.................................................................................................................
.................................................................................................................
.................................................................................................................
.................................................................................................................
.#.#.####.#...#.###...###.#...#.#...#.#...#.#....................................................................
.#.#.#..#.#...#.#.....#...#...#.##..#.#...#.#....................................................................
.###.####..#.#..###...###.#...#.#.#.#.#...###....................................................................
.#.#.#..#..#.#..#.....#...#...#.#..##.......#....................................................................
.#.#.#..#...#...###...#....###..#...#.#.....#....................................................................
.................................................................................................................
#################################################################################################################
#o=.....................|......|................|...................|.....|.......|........|.|................v.#
#o=.........|......................|.......|.........|...||...|...|...............|......|...|....|.............#
#o=........|........|...........|.......|....|............|..|.........|......|.....|......|.|...|..............#
#o=.....@.........||....|..................|....|.......|.|.......|...............|......|...|....|...........^o#
#####################################################+#####################################################o#####
.....................................................#.....................................................#.....
`, 
`
#######
#...@.#
#.#.#.#
#=.=.=#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#+.+++#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#++.++#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#.....#
#+.+++#
#.....#
#.o...#
#..o..#
#..o..#
#.o...#
#+++++#
#######
`,
// Very difficult. Probably should be in Shadow-levels or be finale level
// Then MOVE IT
`
#########################
....##..................#
....##......#...........#
....##.....#|#..........#
....##..................#
....##..................#
@.o.##.....|o|..........#
#...##.....###..........#
+=..+#.....+o+..........#
+...+#.....+.+..........#
+...+#..................#
+...+#..................#
+.=.+#=...###############
+...+#....=...=...=..=..#
+...+#........=.........#
+...+#...=..............#
+..=+####=..........=...#
+...+#####....=.........#
+...+#.............=....#
+=..+#.........=........#
+...+#...=.........######
+...+#...........=#######
+...+#...=..............#
+..<+#.........=........#
+...+#####..=...........#
+...+#|............=....#
+>..+#|.|......=........#
+...+#|.|..............=#
#.......|..............<#
#########################
`];

if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports)) {
  module.exports = GAME_LEVELS;
}
if (typeof global != "undefined" && !global.GAME_LEVELS) {
	global.GAME_LEVELS = GAME_LEVELS;
}
