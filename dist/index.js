"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const archiver = require("archiver");
const fs_1 = require("fs");
function file(fileIn, fileOut, levelCompression = 9) {
    return new Promise((resolve, reject) => {
        fs_1.access(fileIn, fs_1.constants.F_OK, notExistingError => {
            if (notExistingError)
                return reject(notExistingError);
            const output = fs_1.createWriteStream(fileOut);
            output.on('close', () => {
                resolve({ pointer: archive.pointer() });
            });
            const archive = archiver('zip', {
                zlib: { level: levelCompression }
            });
            archive.on('error', error => {
                reject(error);
            });
            archive.pipe(output);
            archive.file(fileIn);
            archive.finalize();
        });
    });
}
exports.file = file;
function folder(folderIn, fileOut, levelCompression = 9) {
    return new Promise((resolve, reject) => {
        fs_1.access(folderIn, fs_1.constants.F_OK, notExistingError => {
            if (notExistingError)
                return reject(notExistingError);
            const output = fs_1.createWriteStream(fileOut);
            output.on('close', () => {
                resolve({ pointer: archive.pointer() });
            });
            const archive = archiver('zip', {
                zlib: { level: levelCompression }
            });
            archive.on('error', error => {
                reject(error);
            });
            archive.pipe(output);
            archive.directory(folderIn, false);
            archive.finalize();
        });
    });
}
exports.folder = folder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0M7QUFDcEMsMkJBQW1FO0FBTW5FLFNBQWdCLElBQUksQ0FBQyxNQUFnQixFQUFFLE9BQWlCLEVBQUUsbUJBQTJCLENBQUM7SUFDcEYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxXQUFNLENBQUMsTUFBTSxFQUFFLGNBQVMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtZQUNoRCxJQUFJLGdCQUFnQjtnQkFBRSxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBRXJELE1BQU0sTUFBTSxHQUFHLHNCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXpDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDekMsQ0FBQyxDQUFDLENBQUE7WUFFRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFO2dCQUM5QixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7YUFDbEMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUVwQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRXBCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQTFCRCxvQkEwQkM7QUFFRCxTQUFnQixNQUFNLENBQUMsUUFBa0IsRUFBRSxPQUFpQixFQUFFLG1CQUEyQixDQUFDO0lBQ3hGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsV0FBTSxDQUFDLFFBQVEsRUFBRSxjQUFTLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEVBQUU7WUFDbEQsSUFBSSxnQkFBZ0I7Z0JBQUUsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUVyRCxNQUFNLE1BQU0sR0FBRyxzQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUV6QyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ3pDLENBQUMsQ0FBQyxDQUFBO1lBRUYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRTtnQkFDOUIsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO2FBQ2xDLENBQUMsQ0FBQTtZQUVGLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDZixDQUFDLENBQUMsQ0FBQTtZQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFcEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFFbEMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBMUJELHdCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFyY2hpdmVyIGZyb20gJ2FyY2hpdmVyJ1xuaW1wb3J0IHsgY3JlYXRlV3JpdGVTdHJlYW0sIGFjY2VzcywgUGF0aExpa2UsIGNvbnN0YW50cyB9IGZyb20gJ2ZzJ1xuXG5pbnRlcmZhY2UgUmVzcG9uc2VGaWxlIHtcbiAgcG9pbnRlcjogU3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlKGZpbGVJbjogUGF0aExpa2UsIGZpbGVPdXQ6IFBhdGhMaWtlLCBsZXZlbENvbXByZXNzaW9uOiBOdW1iZXIgPSA5KTogUHJvbWlzZTxSZXNwb25zZUZpbGU+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBhY2Nlc3MoZmlsZUluLCBjb25zdGFudHMuRl9PSywgbm90RXhpc3RpbmdFcnJvciA9PiB7XG4gICAgICBpZiAobm90RXhpc3RpbmdFcnJvcikgcmV0dXJuIHJlamVjdChub3RFeGlzdGluZ0Vycm9yKVxuXG4gICAgICBjb25zdCBvdXRwdXQgPSBjcmVhdGVXcml0ZVN0cmVhbShmaWxlT3V0KVxuXG4gICAgICBvdXRwdXQub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHsgcG9pbnRlcjogYXJjaGl2ZS5wb2ludGVyKCkgfSlcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGFyY2hpdmUgPSBhcmNoaXZlcignemlwJywge1xuICAgICAgICB6bGliOiB7IGxldmVsOiBsZXZlbENvbXByZXNzaW9uIH1cbiAgICAgIH0pXG5cbiAgICAgIGFyY2hpdmUub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9KVxuXG4gICAgICBhcmNoaXZlLnBpcGUob3V0cHV0KVxuXG4gICAgICBhcmNoaXZlLmZpbGUoZmlsZUluKVxuXG4gICAgICBhcmNoaXZlLmZpbmFsaXplKClcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9sZGVyKGZvbGRlckluOiBQYXRoTGlrZSwgZmlsZU91dDogUGF0aExpa2UsIGxldmVsQ29tcHJlc3Npb246IE51bWJlciA9IDkpOiBQcm9taXNlPFJlc3BvbnNlRmlsZT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGFjY2Vzcyhmb2xkZXJJbiwgY29uc3RhbnRzLkZfT0ssIG5vdEV4aXN0aW5nRXJyb3IgPT4ge1xuICAgICAgaWYgKG5vdEV4aXN0aW5nRXJyb3IpIHJldHVybiByZWplY3Qobm90RXhpc3RpbmdFcnJvcilcblxuICAgICAgY29uc3Qgb3V0cHV0ID0gY3JlYXRlV3JpdGVTdHJlYW0oZmlsZU91dClcblxuICAgICAgb3V0cHV0Lm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7IHBvaW50ZXI6IGFyY2hpdmUucG9pbnRlcigpIH0pXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhcmNoaXZlID0gYXJjaGl2ZXIoJ3ppcCcsIHtcbiAgICAgICAgemxpYjogeyBsZXZlbDogbGV2ZWxDb21wcmVzc2lvbiB9XG4gICAgICB9KVxuXG4gICAgICBhcmNoaXZlLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfSlcblxuICAgICAgYXJjaGl2ZS5waXBlKG91dHB1dClcblxuICAgICAgYXJjaGl2ZS5kaXJlY3RvcnkoZm9sZGVySW4sIGZhbHNlKVxuXG4gICAgICBhcmNoaXZlLmZpbmFsaXplKClcbiAgICB9KVxuICB9KVxufVxuIl19