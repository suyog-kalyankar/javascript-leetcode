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
        while (ticketMap.has(source) && cnt > tickets.length) {
            trip += ", " + ticketMap.get(source);
            source = ticketMap.get(source);
            cnt++;
        }
        return `'${trip}'`;
    } else {
        console.log("Invalid input data!");
        return;
    }
}

const tickets = [{ source: 'Amsterdam', destination: 'Berlin' }, {
    source: 'Paris', destination:
        'London'
}, { source: 'London', destination: 'Amsterdam' }];
console.log(getTripRoute(tickets));