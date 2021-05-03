function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const map = new Map<number, number[]>();
  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i][0];
    const preCourse = prerequisites[i][1]
    if (map.has(course)) {
      map.get(course)!.push(preCourse);
    } else {
      map.set(course, [preCourse]);
    }
  }
    
  const entries = map.entries();
  for (let e of entries) {
    const set = new Set<number>([e[0]]);
    if (!validatePrerequisites(set, e[1])) {      
      return false;
    }
  }
  return true;
  
  function validatePrerequisites (courseSet: Set<number>, preArr: number[]): boolean {
    for (let i = 0; i < preArr.length; i++) {
      const preCourse = preArr[i];
      if (courseSet.has(preCourse)) {
        return false;
      }

      if (map.has(preCourse)) {
        courseSet.add(preCourse);
        const isValid = validatePrerequisites(courseSet, map.get(preCourse)!);
        if (!isValid) {
          return false;
        }
        map.delete(preCourse);
        courseSet.delete(preCourse);
      }
    }
    return true;
  }
};

const numCourses = 20;
const prerequisites = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]];
console.log(`Can we finish the numCourses: ${numCourses} with the prerequisites: [${prerequisites}]:`, canFinish(numCourses, prerequisites));

export {};