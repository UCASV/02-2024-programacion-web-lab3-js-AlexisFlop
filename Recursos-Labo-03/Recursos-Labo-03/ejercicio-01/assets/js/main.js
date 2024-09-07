const countVotes = (votes) => {
    const votesCounted = {};
    votes.forEach(element => {
        
        votesCounted[element.candidate] = (votesCounted[element.candidate] || 0) +1;
    });
    return votesCounted;
}

const showResults = (result) => {
    alert("Resultado");
    for(let candidate in result){
        alert(`${candidate}: ${result[candidate]} votes`);
    }
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    
    showResults(countVotes(votes));
}

main();
