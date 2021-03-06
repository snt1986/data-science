export {
    read_csv, 
    save_csv
} from "./Read/Read"

export {
    setData, 
    getData,
    getInfo,
    getDescribe,
    head,
    info,
    describe,
    getUnique,
    correlations,

} from "./Data/Data"

export {
    isMissing,
    isAtipicalData,
    isErrorData
} from "./CleanData/Errors"

export {
    replaceMissingAtipicalAttributes, 
    removeAttributes, 
} from "./CleanData/Remove"