import { useQueries } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { fetchpath } from "../services/services";

const directions = [
  [1, 0], // Down
  [-1, 0], // Up
  [0, 1], // Right
  [0, -1], // Left
];

// BFS to find the shortest path
const findShortestPath = (grid) => {
  if (!grid || grid.length === 0 || grid[0].length === 0) return [];

  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [[0, 0, []]];
  const visited = new Set(["0,0"]);

  while (queue.length > 0) {
    const [r, c, path] = queue.shift();

    if (grid[r][c] === 0 && !(r === 0 && c === 0)) {
      return { path: [[0, 0], ...path], nearest: [r, c] };
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < rows &&
        nc < cols &&
        !visited.has(`${nr},${nc}`)
      ) {
        visited.add(`${nr},${nc}`);
        queue.push([nr, nc, [...path, [nr, nc]]]);
      }
    }
  }

  return { path: [], nearest: null }; // No path found
};

const NearestPath = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ["path"],
        queryFn: fetchpath,
      },
    ],
  });

  const data = queries.find((query) => query.isSuccess)?.data;
  const error = queries.find((query) => query.isError)?.error;
  const isLoading = queries.some((query) => query.isLoading);

  const [grid, setGrid] = useState([]);
  const [path, setPath] = useState([]);
  const [nearestFreeSpace, setNearestFreeSpace] = useState(null);

  useEffect(() => {
    if (!isLoading && !error && data?.length > 0) {
      setGrid(data[0].path);
      const { path, nearest } = findShortestPath(data[0].path);
      setPath(path);
      setNearestFreeSpace(nearest);
    }
  }, [data, isLoading, error]);

  const gridCols = grid[0]?.length || 1;

  return (
    !isLoading &&
    !error && (
      <div className="flex flex-col items-center justify-center p-5">
        <h1 className="text-2xl font-bold mb-4">
          Shortest Path to Nearest Free Space
        </h1>
        <div
          className="grid gap-1 border border-black p-2 bg-white shadow-lg"
          style={{
            gridTemplateColumns: `repeat(${gridCols}, minmax(2rem, 1fr))`,
          }}
        >
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              let borders = "";
              let isNearest =
                nearestFreeSpace &&
                rIdx === nearestFreeSpace[0] &&
                cIdx === nearestFreeSpace[1];

              // Find index in path
              const pathIndex = path.findIndex(
                ([r, c]) => r === rIdx && c === cIdx
              );
              if (pathIndex !== -1 && pathIndex < path.length - 1) {
                const [nextR, nextC] = path[pathIndex + 1];

                if (nextR > rIdx) borders = "border-l-8 border-green-500"; // Downward movement
                if (nextR < rIdx) borders = "border-r-8 border-green-500"; // Upward movement
                if (nextC > cIdx) borders = "border-t-8 border-green-500"; // Right movement
                if (nextC < cIdx) borders = "border-b-8 border-green-500"; // Left movement
              }

              return (
                <div
                  key={`${rIdx}-${cIdx}`}
                  className={`w-12 h-12 border border-black flex items-center justify-center ${borders} ${
                    isNearest
                      ? "bg-green-500"
                      : cell === 1
                      ? "bg-red-500"
                      : "bg-white"
                  }`}
                >
                  {rIdx === 0 && cIdx === 0 ? "🚀" : ""}
                </div>
              );
            })
          )}
        </div>
      </div>
    )
  );
};

export default NearestPath;

// import { useQueries } from "@tanstack/react-query";
// import { useState, useEffect } from "react";
// import { fetchpath } from "../services/services";

// const directions = [
//   [1, 0], // Down
//   [-1, 0], // Up
//   [0, 1], // Right
//   [0, -1], // Left
// ];

// // BFS to find the shortest path
// const findShortestPath = (grid) => {
//   if (!grid || grid.length === 0 || grid[0].length === 0) return [];

//   const rows = grid.length;
//   const cols = grid[0].length;
//   const queue = [[0, 0, []]]; // [row, col, path_so_far]
//   const visited = new Set(["0,0"]);

//   while (queue.length > 0) {
//     const [r, c, path] = queue.shift();

//     // If we find a free space (0) that is not the start position, return path
//     if (grid[r][c] === 0 && !(r === 0 && c === 0)) {
//       return [[0, 0], ...path, [r, c]];
//     }

//     for (const [dr, dc] of directions) {
//       const nr = r + dr;
//       const nc = c + dc;

//       if (
//         nr >= 0 &&
//         nc >= 0 &&
//         nr < rows &&
//         nc < cols &&
//         !visited.has(`${nr},${nc}`)
//       ) {
//         visited.add(`${nr},${nc}`);
//         queue.push([nr, nc, [...path, [nr, nc]]]);
//       }
//     }
//   }

//   return []; // No path found
// };

// const NearestPath = () => {
//   const queries = useQueries({
//     queries: [
//       {
//         queryKey: ["path"],
//         queryFn: fetchpath,
//       },
//     ],
//   });

//   const data = queries.find((query) => query.isSuccess)?.data;
//   const error = queries.find((query) => query.isError)?.error;
//   const isLoading = queries.some((query) => query.isLoading);

//   const [path, setPath] = useState([]);
//   const [grid, setGrid] = useState([]);

//   useEffect(() => {
//     if (!isLoading && !error && data?.length > 0) {
//       setGrid(data[0].path);
//       setPath(findShortestPath(data[0].path));
//     }
//   }, [data, isLoading, error]);

//   const gridCols = grid[0]?.length || 1; // Dynamically adjust grid columns

//   return (
//     !isLoading &&
//     !error && (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h1 className="text-2xl font-bold mb-4">
//           Shortest Path to Nearest Free Space
//           {console.log(grid)}
//         </h1>
//         <div
//           className={`grid gap-1 border border-black p-2 bg-gray-200 shadow-lg`}
//           style={{
//             gridTemplateColumns: `repeat(${gridCols}, minmax(2rem, 1fr))`,
//           }}
//         >
//           {grid.map((row, rIdx) =>
//             row.map((cell, cIdx) => {
//               let bgColor = cell === 1 ? "bg-red-400" : "bg-white"; // Occupied = red, Empty = white
//               if (path.some(([r, c]) => r === rIdx && c === cIdx)) {
//                 bgColor = "bg-green-500"; // Path is green
//               }
//               return (
//                 <div
//                   key={`${rIdx}-${cIdx}`}
//                   className={`w-12 h-12 ${bgColor} border border-black flex items-center justify-center`}
//                 >
//                   {rIdx === 0 && cIdx === 0 ? "🚀" : ""}
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default NearestPath;
