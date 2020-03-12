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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0M7QUFDcEMsMkJBQW1FO0FBTW5FLFNBQWdCLElBQUksQ0FBQyxNQUFnQixFQUFFLE9BQWlCLEVBQUUsbUJBQTJCLENBQUM7SUFDcEYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxXQUFNLENBQUMsTUFBTSxFQUFFLGNBQVMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtZQUNoRCxJQUFJLGdCQUFnQjtnQkFBRSxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBRXJELE1BQU0sTUFBTSxHQUFHLHNCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXpDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDekMsQ0FBQyxDQUFDLENBQUE7WUFFRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFO2dCQUM5QixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7YUFDbEMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUVwQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRXBCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQTFCRCxvQkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcmNoaXZlciBmcm9tICdhcmNoaXZlcidcbmltcG9ydCB7IGNyZWF0ZVdyaXRlU3RyZWFtLCBhY2Nlc3MsIFBhdGhMaWtlLCBjb25zdGFudHMgfSBmcm9tICdmcydcblxuaW50ZXJmYWNlIFJlc3BvbnNlRmlsZSB7XG4gIHBvaW50ZXI6IFN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZShmaWxlSW46IFBhdGhMaWtlLCBmaWxlT3V0OiBQYXRoTGlrZSwgbGV2ZWxDb21wcmVzc2lvbjogTnVtYmVyID0gOSk6IFByb21pc2U8UmVzcG9uc2VGaWxlPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYWNjZXNzKGZpbGVJbiwgY29uc3RhbnRzLkZfT0ssIG5vdEV4aXN0aW5nRXJyb3IgPT4ge1xuICAgICAgaWYgKG5vdEV4aXN0aW5nRXJyb3IpIHJldHVybiByZWplY3Qobm90RXhpc3RpbmdFcnJvcilcblxuICAgICAgY29uc3Qgb3V0cHV0ID0gY3JlYXRlV3JpdGVTdHJlYW0oZmlsZU91dClcblxuICAgICAgb3V0cHV0Lm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7IHBvaW50ZXI6IGFyY2hpdmUucG9pbnRlcigpIH0pXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhcmNoaXZlID0gYXJjaGl2ZXIoJ3ppcCcsIHtcbiAgICAgICAgemxpYjogeyBsZXZlbDogbGV2ZWxDb21wcmVzc2lvbiB9XG4gICAgICB9KVxuXG4gICAgICBhcmNoaXZlLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfSlcblxuICAgICAgYXJjaGl2ZS5waXBlKG91dHB1dClcblxuICAgICAgYXJjaGl2ZS5maWxlKGZpbGVJbilcblxuICAgICAgYXJjaGl2ZS5maW5hbGl6ZSgpXG4gICAgfSlcbiAgfSlcbn1cbiJdfQ==