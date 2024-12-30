<?php
header('Content-Type: application/json');

// Receive the JSON payload
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if ($data) {
    // Extract data from JSON
    $pressCount = $data['Lanbamthu'];
    $timestamp = $data['Thoigian'];
    $audioName = $data['Amthanh'];

    // Format the timestamp
    $formattedTime = date('Y-m-d H:i:s', $timestamp / 1000);

    // Save to database or log file (example with log file)
    $logFile = 'data_log.txt';
    $logEntry = "Press Count: $pressCount, Time: $formattedTime, Audio: $audioName\n";
    file_put_contents($logFile, $logEntry, FILE_APPEND);

    // Send response back to ESP32
    echo json_encode(['status' => 'success', 'message' => 'Data received']);
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
}
?>
