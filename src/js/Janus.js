export const Janus = {


	states: {},


	inputs: {
		millimeters: 0,
		inches: 0,
	},


	/**
	 * Kick off application
	 *
	 * @return {void}
	 */
	init() {
		this.inputs.millimeters = 100
		this.inputs.inches = this.convertMillimetersToInches( this.inputs.millimeters )
	},


	/**
	 * Watch for input to millimeter field
	 *
	 * @param {InputEvent} e
	 * @return {void}
	 */
	handleUpdateInputMillimeters( e ) {
		let value = parseFloat( e.target.value )

		if ( Number.isNaN( value ) || 0 > value ) {
			value = 0
		}

		// AlpineJS's x-model only stores strings whereas we need numbers
		this.inputs.millimeters = value
		this.inputs.inches = this.convertMillimetersToInches( this.inputs.millimeters )
	},


	/**
	 * Watch for input to inchdes field field
	 *
	 * @param {InputEvent} e
	 * @return {void}
	 */
	handleUpdateInputInches( e ) {
		let value = parseFloat( e.target.value )

		if ( Number.isNaN( value ) || 0 > value ) {
			value = 0
		}

		// AlpineJS's x-model only stores strings whereas we need numbers
		this.inputs.inches = value
		this.inputs.millimeters = this.convertInchesToMillimeters( this.inputs.inches )
	},


	/**
	 * Convert value from millimeters to inches
	 *
	 * @param {mixed} value
	 * @return {number}
	 */
	convertMillimetersToInches( value ) {
		if ( Number.isNaN( value ) ) {
			return 0
		}

		return +( value / 25.4 ).toFixed( 2 )
	},


	/**
	 * Convert value from millimeters to inches
	 *
	 * @param {mixed} value
	 * @return {number}
	 */
	convertInchesToMillimeters( value ) {
		if ( Number.isNaN( value ) ) {
			return 0
		}

		return +( value * 25.4 ).toFixed( 2 )
	},
}
