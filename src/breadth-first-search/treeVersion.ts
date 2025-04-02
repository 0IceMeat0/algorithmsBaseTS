import fs from 'node:fs';
import path from 'node:path';

/**
 * Функция которая позволяет найти файл в определенной дериктории
 *  @param {string} nameFile Имя файла которое нужно найти
 *  @param {string} nameFolder Имя папке в которой нужно посмотреть
 *  @returns
 */

export const breadthFirstSearchTree = (
    nameFile: string,
    nameFolder: string,
): fs.Dirent | void => {
    const folderPath = path.join(
        process.cwd(),
        'src',
        'breadth-first-search',
        nameFolder,
    );
 
    const files = fs.readdirSync(folderPath, { withFileTypes: true });

    try{
        for (const file of files) {
            if (file.isFile() && file.name.split('.')[0] === nameFile) {
                return file; 
            }

            if (file.isDirectory()) {
                const subDirResult = breadthFirstSearchTree(
                    nameFile,
                    path.join(nameFolder, file.name),
                );
                if (subDirResult) return subDirResult; 
            }
        }
    }catch(err){
        throw err
    }
        
 

    return

};
