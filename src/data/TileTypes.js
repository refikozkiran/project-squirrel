export const TILE_TYPES = [
    "acorn",
    "leaf",
    "flower",
    "mushroom",
    "crystal",
    "wood"
];

export function randomTileType() {
    return TILE_TYPES[
        Math.floor(Math.random() * TILE_TYPES.length)
    ];
}