function TaxiQueue() {
	let int = 0;
	let inter = 0;

	function joinQueue() {
		return int += 1;
	}

	function leaveQueue() {
		if (int > 0) {
			return int -= 1;
		}

	}

	function joinTaxiQueue() {
		return inter += 1
	}

	function queueLength() {
		return int
	}

	function taxiQueueLength() {
		return inter
	}

	function taxiDepart() {
		if (int >= 12 && inter > 0) {
			int -= 12;
			inter -= 1;
		}

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