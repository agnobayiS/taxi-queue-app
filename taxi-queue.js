function TaxiQueue() {
	let firstCount = 0;
	let secondcounter = 0;

	function joinQueue() {
		 return firstCount += 1;
	}

	function leaveQueue() {
		// return _counter-= 1;
	}

	function joinTaxiQueue() {
		// return _counter++
	}

	function queueLength() {
		// return _counter.length
	}

	function taxiQueueLength() {

	}

	function taxiDepart() {

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}