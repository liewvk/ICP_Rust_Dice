use ic_cdk_macros::{query, update};
use candid::{candid_method, CandidType, Deserialize};
use rand::Rng;
use rand_chacha::{ChaCha8Rng, rand_core::SeedableRng};

#[derive(CandidType, Deserialize)]
struct DiceResult {
    value: u8,
}

// Define the HttpResponse structure to match Candid expectations
#[derive(CandidType, Deserialize)]
struct HttpResponse {
    status_code: u16,
    headers: Vec<(String, String)>,
    body: Vec<u8>,
    upgrade: Option<bool>,
    streaming_strategy: Option<StreamingStrategy>,
}

// Define the StreamingStrategy struct with a callback placeholder (if needed)
#[derive(CandidType, Deserialize)]
struct StreamingStrategy {
    callback: Callback,
}

// Define a Callback struct as a placeholder, since we are not using streaming here
#[derive(CandidType, Deserialize)]
struct Callback {
    token: Option<String>,
    callback: String,
}

#[update]
fn roll_dice() -> Result<DiceResult, String> {
    // Create a new ChaCha8 RNG instance seeded with a value for deterministic results
    let mut rng = ChaCha8Rng::seed_from_u64(42);
    let value = rng.gen_range(1..=6);
    Ok(DiceResult { value })
}

#[query]
fn http_request() -> HttpResponse {
    HttpResponse {
        status_code: 200,
        headers: vec![("Content-Type".to_string(), "text/plain".to_string())],
        body: "Hello from Dice App Backend!".as_bytes().to_vec(),
        upgrade: None,
        streaming_strategy: None, // Not using streaming, so set to None
    }
}

// Expose the Candid interface directly as a query method
#[query]
#[candid_method(query)]
fn __get_candid_interface_tmp_hack() -> String {
    include_str!("../dice_app_backend.did").to_string()
}


















