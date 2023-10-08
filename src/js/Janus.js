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
		const value = this.parseNumericValue( e.target.value )

		this.inputs.millimeters = value.toString()
		this.inputs.inches = this.convertMillimetersToInches( this.inputs.millimeters )
	},


	/**
	 * Watch for input to inchdes field field
	 *
	 * @param {InputEvent} e
	 * @return {void}
	 */
	handleUpdateInputInches( e ) {
		const value = this.parseNumericValue( e.target.value )

		this.inputs.inches = value.toString()
		this.inputs.millimeters = this.convertInchesToMillimeters( this.inputs.inches )
	},


	/**
	 * Convert value from millimeters to inches
	 *
	 * @param {mixed} value
	 * @return {number}
	 */
	convertMillimetersToInches( value ) {
		const parsedValue = this.parseNumericValue( value )

		return +( parsedValue / 25.4 ).toFixed( 2 )
	},


	/**
	 * Convert value from millimeters to inches
	 *
	 * @param {mixed} value
	 * @return {number}
	 */
	convertInchesToMillimeters( value ) {
		const parsedValue = this.parseNumericValue( value )

		return +( parsedValue * 25.4 ).toFixed( 2 )
	},


	/**
	 * Convert value to number and validate
	 *
	 * @param {mixed} value
	 * @return {number}
	 */
	parseNumericValue( value ) {
		let parsedValue = parseFloat( value )

		if ( Number.isNaN( parsedValue ) || 0 > parsedValue ) {
			parsedValue = 0
		}

		return parsedValue
	},
}
