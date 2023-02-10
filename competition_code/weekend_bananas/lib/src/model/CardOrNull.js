/**
 * SLCEE-2023-PC Arena
 * **SAP Labs CEE Hub Programming Competition 2023 Arena server**.  You can find more information about the game and the competititon rules at [github/SLCEE-2023-PC-public](https://github.com/afarago/SLCEE-2023-PC-public).   For a test run, you can use the crash test dummy user `000000000000000000000000/dummypass`.   *Note: All the APIs expect and return application/json*.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: DL SLCEE 2023 PC <DL_637A3F6466D808029A65636A@global.corp.sap>
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Card from './Card';
import CardSuit from './CardSuit';
import CardValue from './CardValue';

/**
 * The CardOrNull model module.
 * @module model/CardOrNull
 * @version 1.0.0
 */
class CardOrNull {
    /**
     * Constructs a new <code>CardOrNull</code>.
     * @alias module:model/CardOrNull
     * @implements module:model/Card
     */
    constructor() { 
        Card.initialize(this);
        CardOrNull.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CardOrNull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardOrNull} obj Optional instance to populate.
     * @return {module:model/CardOrNull} The populated <code>CardOrNull</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardOrNull();
            Card.constructFromObject(data, obj);

            if (data.hasOwnProperty('suit')) {
                obj['suit'] = CardSuit.constructFromObject(data['suit']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = CardValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CardOrNull</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CardOrNull</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/CardSuit} suit
 */
CardOrNull.prototype['suit'] = undefined;

/**
 * @member {module:model/CardValue} value
 */
CardOrNull.prototype['value'] = undefined;


// Implement Card interface:
/**
 * @member {module:model/CardSuit} suit
 */
Card.prototype['suit'] = undefined;
/**
 * @member {module:model/CardValue} value
 */
Card.prototype['value'] = undefined;




export default CardOrNull;

