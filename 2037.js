var minMovesToSeat = function(seats, students) {
    let sortedSeates = seats.sort((a,b)=>{
        if(a > b) return -1;
        if(a < b) return 1;
        return 0
    })
    let sortedStudents = students.sort((a,b)=>{
        if(a > b) return -1;
        if(a < b) return 1;
        return 0
    })
    let count = 0
    for(let i=0; i<seats.length; i++) {
      count += Math.abs(sortedSeates[i] - sortedStudents[i])
    }
    return count
    };