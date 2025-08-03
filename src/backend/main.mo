import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Float "mo:base/Float";
import Array "mo:base/Array";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor  {
  // Dummy: Returns the balance of a given Bitcoin address
  public shared query func get_balance(address : Text) : async {
    address : Text;
    balance : Float;
    unit : Text;
  } {
    return {
      address = address;
      balance = 0.1;
      unit = "BTC";
    };
  };

  // Dummy: Returns the UTXOs of a given Bitcoin address
  public shared query func get_utxos(address : Text) : async [{
    txid : Text;
    vout : Nat;
    value : Nat;
    confirmations : Nat;
  }] {
    return [
      {
        txid = "dummy-txid-1";
        vout = 0;
        value = 25000;
        confirmations = 5;
      },
      {
        txid = "dummy-txid-2";
        vout = 1;
        value = 50000;
        confirmations = 3;
      }
    ];
  };

  // Dummy: Returns the 100 fee percentiles measured in millisatoshi/byte
  public shared query func get_current_fee_percentiles() : async [Nat] {
    let fees : [var Nat] = Array.init<Nat>(100, 0);
    for (i in fees.keys()) {
      fees[i] := 100 + i;
    };
    return Array.freeze(fees);
  };

  // Dummy: Returns the P2PKH address of this canister
  public shared query func get_p2pkh_address() : async { address : Text } {
    return {
      address = "tb1qdummyaddressxyz1234567890";
    };
  };

  // Dummy: Sends satoshis from this canister to a specified address
  public shared func send(destinationAddress : Text, amountInSatoshi : Nat) : async {
    success : Bool;
    destination : Text;
    amount : Nat;
    txId : Text;
  } {
    return {
      success = true;
      destination = destinationAddress;
      amount = amountInSatoshi;
      txId = "dummy-txid-sent-1234567890";
    };
  };
};
