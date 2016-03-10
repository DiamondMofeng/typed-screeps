/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */

// Last update 2016-02-05
declare var FIND_EXIT_TOP: number;
declare var FIND_EXIT_RIGHT: number;
declare var FIND_EXIT_BOTTOM: number;
declare var FIND_EXIT_LEFT: number;
declare var FIND_EXIT: number;
declare var FIND_CREEPS: number;
declare var FIND_MY_CREEPS: number;
declare var FIND_HOSTILE_CREEPS: number;
declare var FIND_SOURCES_ACTIVE: number;
declare var FIND_SOURCES: number;
declare var FIND_DROPPED_RESOURCES: number;
declare var FIND_STRUCTURES: number;
declare var FIND_MY_STRUCTURES: number;
declare var FIND_HOSTILE_STRUCTURES: number;
declare var FIND_FLAGS: number;
declare var FIND_CONSTRUCTION_SITES: number;
declare var FIND_MY_CONSTRUCTION_SITES: number;
declare var FIND_HOSTILE_CONSTRUCTION_SITES: number;
declare var FIND_MY_SPAWNS: number;
declare var FIND_HOSTILE_SPAWNS: number;

// Last update 2016-02-05
declare var TOP: number;
declare var TOP_RIGHT: number;
declare var RIGHT: number;
declare var BOTTOM_RIGHT: number;
declare var BOTTOM: number;
declare var BOTTOM_LEFT: number;
declare var LEFT: number;
declare var TOP_LEFT: number;

// Last update 2016-02-05
declare var OK: number;
declare var ERR_NOT_OWNER: number;
declare var ERR_NO_PATH: number;
declare var ERR_NAME_EXISTS: number;
declare var ERR_BUSY: number;
declare var ERR_NOT_FOUND: number;
declare var ERR_NOT_ENOUGH_RESOURCES: number;
declare var ERR_NOT_ENOUGH_ENERGY: number;
declare var ERR_INVALID_TARGET: number;
declare var ERR_FULL: number;
declare var ERR_NOT_IN_RANGE: number;
declare var ERR_INVALID_ARGS: number;
declare var ERR_TIRED: number;
declare var ERR_NO_BODYPART: number;
declare var ERR_NOT_ENOUGH_EXTENSIONS: number;
declare var ERR_RCL_NOT_ENOUGH: number;
declare var ERR_GCL_NOT_ENOUGH: number;

// Last update 2016-02-05
declare var COLOR_RED: string;
declare var COLOR_PURPLE: string;
declare var COLOR_BLUE: string;
declare var COLOR_CYAN: string;
declare var COLOR_GREEN: string;
declare var COLOR_YELLOW: string;
declare var COLOR_ORANGE: string;
declare var COLOR_BROWN: string;
declare var COLOR_GREY: string;
declare var COLOR_WHITE: string;

declare var CREEP_SPAWN_TIME: number;
declare var CREEP_LIFE_TIME: number;

declare var OBSTACLE_OBJECT_TYPES: string[];

declare var ENERGY_REGEN_TIME: number;
declare var ENERGY_REGEN_AMOUNT: number;
declare var ENERGY_DECAY: number;

declare var CREEP_CORPSE_RATE: number;

declare var REPAIR_COST: number;

declare var RAMPART_DECAY_AMOUNT: number;
declare var RAMPART_DECAY_TIME: number;
declare var RAMPART_HITS_MAX: {
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number
};

declare var SPAWN_HITS: number;
declare var SPAWN_ENERGY_START: number;
declare var SPAWN_ENERGY_CAPACITY: number;

declare var SOURCE_ENERGY_CAPACITY: number;

declare var ROAD_HITS: number;

declare var WALL_HITS: number;
declare var WALL_HITS_MAX: number;

declare var EXTENSION_HITS: number;
declare var EXTENSION_ENERGY_CAPACITY: number;

declare var ROAD_WEAROUT: number;
declare var ROAD_DECAY_AMOUNT: number;
declare var ROAD_DECAY_TIME: number;

declare var LINK_HITS: number;
declare var LINK_HITS_MAX: number;
declare var LINK_CAPACITY: number;
declare var LINK_COOLDOWN: number;
declare var LINK_LOSS_RATION: number;

declare var STORAGE_CAPACITY: number;
declare var STORAGE_HITS: number;

declare var BODYPART_COST: {
    [part: string]: number,
    move: number,
    work: number,
    attack: number,
    carry: number,
    heal: number,
    ranged_attack: number,
    tough: number
};

declare var CARRY_CAPACITY: number;
declare var HARVEST_POWER: number;
declare var REPAIR_POWER: number;
declare var BUILD_POWER: number;
declare var ATTACK_POWER: number;
declare var UPGRADE_CONTROLLER_POWER: number;
declare var RANGED_ATTACK_POWER: number;
declare var HEAL_POWER: number;
declare var RANGED_HEAL_POWER: number;

// Last update 2016-02-05
declare var MOVE: string;
declare var WORK: string;
declare var CARRY: string;
declare var ATTACK: string;
declare var RANGED_ATTACK: string;
declare var TOUGH: string;
declare var HEAL: string;
declare var CLAIM: string;

declare var CONSTRUCTION_COST: {
    spawn: number,
    extension: number,
    road: number,
    constructedWall: number,
    rampart: number,
    link: number,
    storage: number
};

declare var CONSTRUCTION_COST_ROAD_SWAMP_RATIO: number;

// Last update 2016-02-05
declare var STRUCTURE_EXTENSION: string;
declare var STRUCTURE_RAMPART: string;
declare var STRUCTURE_ROAD: string;
declare var STRUCTURE_SPAWN: string;
declare var STRUCTURE_LINK: string;
declare var STRUCTURE_WALL: string;
declare var STRUCTURE_KEEPER_LAIR: string;
declare var STRUCTURE_CONTROLLER: string;
declare var STRUCTURE_STORAGE: string;
declare var STRUCTURE_TOWER: string;
declare var STRUCTURE_OBSERVER: string;
declare var STRUCTURE_POWER_BANK: string;
declare var STRUCTURE_POWER_SPAWN: string;

// Last update 2016-02-05
declare var RESOURCE_ENERGY: string;
declare var RESOURCE_POWER: string;
declare var RESOURCES_ALL: string[];

declare var CONTROLLER_STRUCTURES: {
    spawn: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        6: number,
        7: number,
        8: number
    },
    extension: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        6: number,
        7: number,
        8: number
    },
    link: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        6: number,
        7: number,
        8: number
    },
    constructedWall: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        6: number,
        7: number,
        8: number
    },
    rampart: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        6: number,
        7: number,
        8: number
    },
    storage: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        6: number,
        7: number,
        8: number
    }
};

declare var GCL_POW: number;
declare var GCL_MULTIPLY: number;

// Updated 2016-02-05
declare var MODE_SIMULATION: string;
declare var MODE_WORLD: string;

declare var TERRAIN_MASK_WALL: number;
declare var TERRAIN_MASK_SWAMP: number;
declare var TERRAIN_MASK_LAVA: number;