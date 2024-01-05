const getTripRoute = (tickets) => {
    let ticketMap = new Map();
    let reverseTicketMap = new Map();
    if (!tickets.length) {
        return "Please enter a trip tickets!"
    }
    tickets.forEach(ticket => {
        ticketMap.set(ticket.source, ticket.destination);
        reverseTicketMap.set(ticket.destination, ticket.source);
    })
    let tripSource = "";
    for (const key of ticketMap.keys()) {
        if (!reverseTicketMap.has(key)) {
            tripSource = key;
            break;
        }
    }
    if (tripSource) {
        let source = tripSource;
        let trip = source;
        let cnt = 0;
        while (ticketMap.has(source) && cnt < tickets.length) {
            trip += ", " + ticketMap.get(source);
            source = ticketMap.get(source);
            cnt++;
        }
        return tickets.length + 1 === trip.split(", ").length ? `'${trip}'` : `Please enter valid tickets as we got incomplete trip sequence: '${trip}'`;
    } else {
        console.log("Invalid input data!");
        return;
    }
}

const tickets = [{ source: 'Amsterdam', destination: 'Paris' }, 
                { source: 'Paris', destination: 'Berlin' }, 
                { source: 'London', destination: 'Berlin' }];
console.log(getTripRoute(tickets));