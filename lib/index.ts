import * as archiver from 'archiver'
import { createWriteStream, access, PathLike, constants } from 'fs'

interface ResponseFile {
  pointer: String
}

export function file(fileIn: PathLike, fileOut: PathLike, levelCompression: Number = 9): Promise<ResponseFile> {
  return new Promise((resolve, reject) => {
    access(fileIn, constants.F_OK, notExistingError => {
      if (notExistingError) return reject(notExistingError)

      const output = createWriteStream(fileOut)

      output.on('close', () => {
        resolve({ pointer: archive.pointer() })
      })

      const archive = archiver('zip', {
        zlib: { level: levelCompression }
      })

      archive.on('error', error => {
        reject(error)
      })

      archive.pipe(output)

      archive.file(fileIn)

      archive.finalize()
    })
  })
}

export function folder(folderIn: PathLike, fileOut: PathLike, levelCompression: Number = 9): Promise<ResponseFile> {
  return new Promise((resolve, reject) => {
    access(folderIn, constants.F_OK, notExistingError => {
      if (notExistingError) return reject(notExistingError)

      const output = createWriteStream(fileOut)

      output.on('close', () => {
        resolve({ pointer: archive.pointer() })
      })

      const archive = archiver('zip', {
        zlib: { level: levelCompression }
      })

      archive.on('error', error => {
        reject(error)
      })

      archive.pipe(output)

      archive.directory(folderIn, false)

      archive.finalize()
    })
  })
}
