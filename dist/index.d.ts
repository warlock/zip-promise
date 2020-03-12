/// <reference types="node" />
import { PathLike } from 'fs';
interface ResponseFile {
    pointer: String;
}
export declare function file(fileIn: PathLike, fileOut: PathLike, levelCompression?: Number): Promise<ResponseFile>;
export {};
//# sourceMappingURL=index.d.ts.map