window.BENCHMARK_DATA = {
  "lastUpdate": 1663051983271,
  "repoUrl": "https://github.com/caraml-dev/universal-prediction-interface",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Pradithya Aria",
            "username": "pradithya",
            "email": "pradithya.pura@go-jek.com"
          },
          "committer": {
            "name": "Pradithya Aria",
            "username": "pradithya",
            "email": "pradithya.pura@go-jek.com"
          },
          "id": "6710549802a5943d41967c640503d980d414ec55",
          "message": "Separate benchmark publishing to different job",
          "timestamp": "2022-09-05T04:03:14Z",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/6710549802a5943d41967c640503d980d414ec55"
        },
        "date": 1662353997609,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 90701.67264371064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001338993828926077",
            "extra": "mean: 11.025155003790783 usec\nrounds: 24851"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 3435.5217470716684,
            "unit": "iter/sec",
            "range": "stddev: 0.000703063042642006",
            "extra": "mean: 291.0766030959835 usec\nrounds: 3230"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 36.183426681241684,
            "unit": "iter/sec",
            "range": "stddev: 0.00931485648941606",
            "extra": "mean: 27.6369623255838 msec\nrounds: 43"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 6.904891052734057,
            "unit": "iter/sec",
            "range": "stddev: 0.03606577796662239",
            "extra": "mean: 144.82487737500804 msec\nrounds: 8"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 3.4090848602896076,
            "unit": "iter/sec",
            "range": "stddev: 0.0238652574441552",
            "extra": "mean: 293.33385380000436 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 0.815354376334346,
            "unit": "iter/sec",
            "range": "stddev: 0.09931335521747016",
            "extra": "mean: 1.2264605784000082 sec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 65349.82800854222,
            "unit": "iter/sec",
            "range": "stddev: 0.00023352236380507003",
            "extra": "mean: 15.302259094993866 usec\nrounds: 29769"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 5563.034541183846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603017632508568",
            "extra": "mean: 179.75800664131668 usec\nrounds: 5722"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 47.252682444276005,
            "unit": "iter/sec",
            "range": "stddev: 0.009661688090360497",
            "extra": "mean: 21.16281972307661 msec\nrounds: 65"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 12.09974779195004,
            "unit": "iter/sec",
            "range": "stddev: 0.010812304045813192",
            "extra": "mean: 82.6463507499966 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 6.574407381744875,
            "unit": "iter/sec",
            "range": "stddev: 0.01934152722564806",
            "extra": "mean: 152.10496428570812 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 1.2877946722722688,
            "unit": "iter/sec",
            "range": "stddev: 0.06570679076668824",
            "extra": "mean: 776.5213053999787 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 157128.30577731246,
            "unit": "iter/sec",
            "range": "stddev: 0.000006471777318256809",
            "extra": "mean: 6.3642256883825485 usec\nrounds: 58758"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 48999.39235379684,
            "unit": "iter/sec",
            "range": "stddev: 0.000010554418113040041",
            "extra": "mean: 20.408416348912386 usec\nrounds: 37483"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 3927.873335877115,
            "unit": "iter/sec",
            "range": "stddev: 0.00006057306465208079",
            "extra": "mean: 254.5906943755086 usec\nrounds: 3645"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 604.0823939081453,
            "unit": "iter/sec",
            "range": "stddev: 0.00022027932099770624",
            "extra": "mean: 1.6554033192896807 msec\nrounds: 617"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 197.59478972931794,
            "unit": "iter/sec",
            "range": "stddev: 0.0047562257192585115",
            "extra": "mean: 5.060862188572303 msec\nrounds: 350"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 55.972085921124936,
            "unit": "iter/sec",
            "range": "stddev: 0.0020609536328345677",
            "extra": "mean: 17.86604846939572 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 125765.29946522713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010753460159871589",
            "extra": "mean: 7.951318879310507 usec\nrounds: 41188"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 53168.30009449191,
            "unit": "iter/sec",
            "range": "stddev: 0.000011398600075391741",
            "extra": "mean: 18.808199589281156 usec\nrounds: 27266"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 4945.349208627653,
            "unit": "iter/sec",
            "range": "stddev: 0.00006465398827110314",
            "extra": "mean: 202.21018937457453 usec\nrounds: 3068"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 841.2934919429301,
            "unit": "iter/sec",
            "range": "stddev: 0.00026818665829435865",
            "extra": "mean: 1.1886458288064778 msec\nrounds: 368"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 516.4495003998223,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966661949550336",
            "extra": "mean: 1.9362977391319478 msec\nrounds: 460"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 71.16029586644706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353898834331019",
            "extra": "mean: 14.052780245275965 msec\nrounds: 53"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 239437.7627663837,
            "unit": "iter/sec",
            "range": "stddev: 0.000005574814550439928",
            "extra": "mean: 4.176450650249714 usec\nrounds: 28916"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 17129.878081916693,
            "unit": "iter/sec",
            "range": "stddev: 0.000019715309053240766",
            "extra": "mean: 58.37753165655386 usec\nrounds: 14515"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 162.19223844439037,
            "unit": "iter/sec",
            "range": "stddev: 0.00027133715859006737",
            "extra": "mean: 6.165523144579217 msec\nrounds: 166"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 30.06188101048387,
            "unit": "iter/sec",
            "range": "stddev: 0.0020268498471022072",
            "extra": "mean: 33.264718187503206 msec\nrounds: 32"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 13.453199483663711,
            "unit": "iter/sec",
            "range": "stddev: 0.012036783755643031",
            "extra": "mean: 74.33176035294095 msec\nrounds: 17"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 2.7644711418391577,
            "unit": "iter/sec",
            "range": "stddev: 0.011823942400637928",
            "extra": "mean: 361.73284100000274 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 138970.944311493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008319567995044403",
            "extra": "mean: 7.1957487585216 usec\nrounds: 35050"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 11988.8848836882,
            "unit": "iter/sec",
            "range": "stddev: 0.000024680774649263065",
            "extra": "mean: 83.410593203758 usec\nrounds: 7328"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 110.70004380732105,
            "unit": "iter/sec",
            "range": "stddev: 0.0023539977621740878",
            "extra": "mean: 9.033420092773856 msec\nrounds: 97"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 21.27616707769911,
            "unit": "iter/sec",
            "range": "stddev: 0.005612410613269005",
            "extra": "mean: 47.00094694444109 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 8.928477892135339,
            "unit": "iter/sec",
            "range": "stddev: 0.007455240739904511",
            "extra": "mean: 112.00117333334623 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 1.7044096084513083,
            "unit": "iter/sec",
            "range": "stddev: 0.06983589565435111",
            "extra": "mean: 586.7134255999872 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 269406.41521516454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022134556684011334",
            "extra": "mean: 3.711864096485373 usec\nrounds: 68762"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 103927.65337615504,
            "unit": "iter/sec",
            "range": "stddev: 0.000016421118316834653",
            "extra": "mean: 9.622078123717532 usec\nrounds: 56935"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 9381.573635840674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001726439869706886",
            "extra": "mean: 106.5919257063307 usec\nrounds: 6932"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 1717.1838230519515,
            "unit": "iter/sec",
            "range": "stddev: 0.00008055697140450854",
            "extra": "mean: 582.348835678349 usec\nrounds: 1564"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 840.3098927470138,
            "unit": "iter/sec",
            "range": "stddev: 0.00035684874605187435",
            "extra": "mean: 1.190037162041436 msec\nrounds: 901"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 160.06514838928427,
            "unit": "iter/sec",
            "range": "stddev: 0.0004301508050866545",
            "extra": "mean: 6.247456176830971 msec\nrounds: 164"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 176382.73870950378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033114484336745745",
            "extra": "mean: 5.6694890175561055 usec\nrounds: 54360"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 89531.64325761207,
            "unit": "iter/sec",
            "range": "stddev: 0.000004689674473632212",
            "extra": "mean: 11.16923540789562 usec\nrounds: 44922"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 9022.419668032951,
            "unit": "iter/sec",
            "range": "stddev: 0.000012059399469687176",
            "extra": "mean: 110.8350128672321 usec\nrounds: 544"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 1396.161120636013,
            "unit": "iter/sec",
            "range": "stddev: 0.00034166885151164705",
            "extra": "mean: 716.2497115980825 usec\nrounds: 1328"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 526.8016241240026,
            "unit": "iter/sec",
            "range": "stddev: 0.0021054307682332346",
            "extra": "mean: 1.898247754385458 msec\nrounds: 57"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 104.59253019380449,
            "unit": "iter/sec",
            "range": "stddev: 0.00477788916039569",
            "extra": "mean: 9.560912219515602 msec\nrounds: 41"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "Pradithya Aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "pradithya.pura@go-jek.com",
            "name": "Pradithya Aria",
            "username": "pradithya"
          },
          "distinct": true,
          "id": "2acf755c8465bfd9da52b231499b9b0f1afd21ca",
          "message": "Change target branch to main",
          "timestamp": "2022-09-06T10:32:46+08:00",
          "tree_id": "2d5771219529dbf6c6e9a2b3aa57094f0428c44b",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/2acf755c8465bfd9da52b231499b9b0f1afd21ca"
        },
        "date": 1662431693653,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 160589.30370902776,
            "unit": "iter/sec",
            "range": "stddev: 0.000014567082672091139",
            "extra": "mean: 6.227064797615058 usec\nrounds: 23149"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 6581.019272914134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792957806595701",
            "extra": "mean: 151.95214578929367 usec\nrounds: 4287"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 69.2216333186369,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895037481593136",
            "extra": "mean: 14.446350830770774 msec\nrounds: 65"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 13.946759641890047,
            "unit": "iter/sec",
            "range": "stddev: 0.002087548388751102",
            "extra": "mean: 71.70124284614697 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 6.334510801250633,
            "unit": "iter/sec",
            "range": "stddev: 0.00432656670531651",
            "extra": "mean: 157.8653871428506 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 1.329524196873725,
            "unit": "iter/sec",
            "range": "stddev: 0.01204100481741847",
            "extra": "mean: 752.1487779999973 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 122930.03210387619,
            "unit": "iter/sec",
            "range": "stddev: 0.00001503562519656599",
            "extra": "mean: 8.13470868660473 usec\nrounds: 20284"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7430.546938919782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004319746419187756",
            "extra": "mean: 134.57959531379734 usec\nrounds: 4396"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 70.57005854854613,
            "unit": "iter/sec",
            "range": "stddev: 0.0008746767034858808",
            "extra": "mean: 14.170315578129866 msec\nrounds: 64"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 14.210306669856395,
            "unit": "iter/sec",
            "range": "stddev: 0.001523122402881593",
            "extra": "mean: 70.37145807143271 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 6.901445535767762,
            "unit": "iter/sec",
            "range": "stddev: 0.0025851753420757205",
            "extra": "mean: 144.8971805714255 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 1.2824396261440674,
            "unit": "iter/sec",
            "range": "stddev: 0.011373367091020438",
            "extra": "mean: 779.763803000003 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 165719.07506785376,
            "unit": "iter/sec",
            "range": "stddev: 0.000012437977755355985",
            "extra": "mean: 6.03430835943629 usec\nrounds: 48077"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 50368.02529388455,
            "unit": "iter/sec",
            "range": "stddev: 0.000024542226182261742",
            "extra": "mean: 19.853865506246386 usec\nrounds: 39526"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 3804.7336123091786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002167317576977844",
            "extra": "mean: 262.8304900939116 usec\nrounds: 2877"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 634.5720911791216,
            "unit": "iter/sec",
            "range": "stddev: 0.00022853393894508222",
            "extra": "mean: 1.5758650812106527 msec\nrounds: 628"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 390.21583277182197,
            "unit": "iter/sec",
            "range": "stddev: 0.00026613025358491614",
            "extra": "mean: 2.562684330096745 msec\nrounds: 309"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 62.66780003724968,
            "unit": "iter/sec",
            "range": "stddev: 0.0009894702517516207",
            "extra": "mean: 15.957158212121712 msec\nrounds: 66"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 113905.00069303572,
            "unit": "iter/sec",
            "range": "stddev: 0.00002314783004342328",
            "extra": "mean: 8.77924580936455 usec\nrounds: 34722"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 46542.668803838205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001827419669994975",
            "extra": "mean: 21.485660915034025 usec\nrounds: 20284"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 4264.125954449437,
            "unit": "iter/sec",
            "range": "stddev: 0.00005799708371552482",
            "extra": "mean: 234.51464864834537 usec\nrounds: 2627"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 744.3012075981807,
            "unit": "iter/sec",
            "range": "stddev: 0.00020081287829292458",
            "extra": "mean: 1.3435420899382193 msec\nrounds: 656"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 443.2379754432237,
            "unit": "iter/sec",
            "range": "stddev: 0.00032727027111874893",
            "extra": "mean: 2.2561243742710273 msec\nrounds: 342"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 64.92569545748778,
            "unit": "iter/sec",
            "range": "stddev: 0.0009808461931856225",
            "extra": "mean: 15.402222385970171 msec\nrounds: 57"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 299190.95710168424,
            "unit": "iter/sec",
            "range": "stddev: 0.00002426320844676312",
            "extra": "mean: 3.3423470070324885 usec\nrounds: 65356"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 18081.47089571551,
            "unit": "iter/sec",
            "range": "stddev: 0.000027787722214907748",
            "extra": "mean: 55.30523516407919 usec\nrounds: 15385"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 163.36038869063364,
            "unit": "iter/sec",
            "range": "stddev: 0.0004420351277877254",
            "extra": "mean: 6.121434994218617 msec\nrounds: 173"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 31.86748205865675,
            "unit": "iter/sec",
            "range": "stddev: 0.001427827949560416",
            "extra": "mean: 31.379950199998675 msec\nrounds: 35"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 15.566158052797912,
            "unit": "iter/sec",
            "range": "stddev: 0.0025421347711698816",
            "extra": "mean: 64.24192768749748 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 2.6792323765398294,
            "unit": "iter/sec",
            "range": "stddev: 0.009463275040572143",
            "extra": "mean: 373.2412345999933 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 143073.66796775803,
            "unit": "iter/sec",
            "range": "stddev: 0.00003076921420223886",
            "extra": "mean: 6.989406326154666 usec\nrounds: 27473"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 10876.183118026696,
            "unit": "iter/sec",
            "range": "stddev: 0.00011569605166634263",
            "extra": "mean: 91.94402017216437 usec\nrounds: 5453"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 110.08689563178139,
            "unit": "iter/sec",
            "range": "stddev: 0.00192911051340432",
            "extra": "mean: 9.083733302325099 msec\nrounds: 86"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 19.702633496968367,
            "unit": "iter/sec",
            "range": "stddev: 0.00416475853554577",
            "extra": "mean: 50.75463643750311 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 6.902546689078569,
            "unit": "iter/sec",
            "range": "stddev: 0.011213426389095511",
            "extra": "mean: 144.87406533334024 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 1.5378370602126932,
            "unit": "iter/sec",
            "range": "stddev: 0.030526377256273544",
            "extra": "mean: 650.2639491999844 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 292409.2392586334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003359837212783613",
            "extra": "mean: 3.419864579297745 usec\nrounds: 58477"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 127946.70468126897,
            "unit": "iter/sec",
            "range": "stddev: 0.000010196263309719706",
            "extra": "mean: 7.815754243074282 usec\nrounds: 57801"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 9265.558385102737,
            "unit": "iter/sec",
            "range": "stddev: 0.00003664568896336106",
            "extra": "mean: 107.92657694627565 usec\nrounds: 8285"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 1617.5441042298135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001523316532481797",
            "extra": "mean: 618.22116465637 usec\nrounds: 1658"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 682.8769112016957,
            "unit": "iter/sec",
            "range": "stddev: 0.00021179345832084446",
            "extra": "mean: 1.4643927530662082 msec\nrounds: 652"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 128.75470576426216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007752676446299659",
            "extra": "mean: 7.766706421052342 msec\nrounds: 152"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 152920.23654636674,
            "unit": "iter/sec",
            "range": "stddev: 0.00002753393656194449",
            "extra": "mean: 6.539356873782963 usec\nrounds: 23364"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 71821.27200825448,
            "unit": "iter/sec",
            "range": "stddev: 0.000026167665085953496",
            "extra": "mean: 13.923451535153388 usec\nrounds: 35211"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 6267.439118824647,
            "unit": "iter/sec",
            "range": "stddev: 0.00004907565311093181",
            "extra": "mean: 159.5548007792269 usec\nrounds: 512"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 975.0993383197721,
            "unit": "iter/sec",
            "range": "stddev: 0.0008340569906180887",
            "extra": "mean: 1.0255365383829869 msec\nrounds: 964"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 497.1131937914545,
            "unit": "iter/sec",
            "range": "stddev: 0.0026035954649345325",
            "extra": "mean: 2.0116142811922897 msec\nrounds: 537"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 86.84465862002882,
            "unit": "iter/sec",
            "range": "stddev: 0.005846613722205451",
            "extra": "mean: 11.514812953267478 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fbb12ddbc0e7f88d822d36ef685ef6c56475ca3",
          "message": "UPI Interface Update (#6)\n\nMotivated by the need for more flexible data passing mechanism and more\r\nefficient interface definition for large message we introduces following\r\nchanges in this PR:\r\n\r\n### Introduction of `Table` data structure\r\n\r\n\r\n[Table](https://github.com/caraml-dev/universal-prediction-interface/blob/ac3775c5d81b461ce29d75e84aed70739091e801/proto/caraml/upi/v1/table.proto)\r\nrepresents dataframe-like data structure in row-based format. Table has\r\nfollowing specifications:\r\n- Table consists of one or more columns that potentially can have\r\ndifferent type.\r\n- All values within a column must have same type. \r\n- A cell value can be null.\r\n- A row within a table has `row_id` (similar purpose to `row_id` in the\r\nPredictionRow)\r\n\r\n### Replace `prediction_rows` in the request and\r\n`prediction_result_rows` in the response to use`Table` definition\r\n\r\n`prediction_rows` and `prediction_result_rows` are technically a\r\ndataframe-like object which can be represented as a `Table`\r\n\r\n\r\nDeserialization performance is improved significantly by at least 2x for\r\nvarious message size.\r\nNOTE: `0001_7467c7b` is the existing interface whereas `0002_ac3775c` is\r\nwith the changes.\r\n\r\n```\r\n--------------------------------------------------------------------------------------------------------- benchmark 'deserialize-request': 24 tests ----------------------------------------------------------------------------------------------------------\r\nName (time in us)                                                    Min                     Max                    Mean                 StdDev                  Median                    IQR            Outliers           OPS            Rounds  Iterations\r\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\ntest_deserialize_proto_request[1-100] (0001_7467c7b)             41.9270 (16.13)      1,842.2130 (23.02)         52.1732 (17.22)        23.2068 (14.41)         45.3840 (15.89)         5.5505 (42.37)   1526;4056   19,166.9311 (0.06)      20015           1\r\ntest_deserialize_proto_request[1-100] (0002_ac3775c)             86.1700 (33.16)        377.9210 (4.72)          90.9080 (30.00)        11.1573 (6.93)          89.3640 (31.29)         3.1950 (24.39)     400;602   11,000.1373 (0.03)      10065           1\r\ntest_deserialize_proto_request[1-1] (0001_7467c7b)                2.5990 (1.0)          114.4450 (1.43)           3.0305 (1.0)           1.6895 (1.05)           2.8560 (1.0)           0.1310 (1.0)      332;6541  329,980.4986 (1.0)       49461           1\r\ntest_deserialize_proto_request[1-1] (0002_ac3775c)                4.6710 (1.80)          80.0310 (1.0)            5.1638 (1.70)          1.8626 (1.16)           5.0190 (1.76)          0.1610 (1.23)     564;1018  193,656.7518 (0.59)      42838           1\r\ntest_deserialize_proto_request[100-100] (0001_7467c7b)        4,181.3790 (>1000.0)    9,231.8540 (115.35)     5,351.1642 (>1000.0)     840.1283 (521.74)     5,403.3230 (>1000.0)   1,300.7730 (>1000.0)      60;4      186.8752 (0.00)        222           1\r\ntest_deserialize_proto_request[100-100] (0002_ac3775c)        3,081.5200 (>1000.0)    3,685.8110 (46.05)      3,180.9798 (>1000.0)      77.3511 (48.04)      3,162.0330 (>1000.0)      68.3450 (521.72)      35;16      314.3686 (0.00)        318           1\r\ntest_deserialize_proto_request[100-500] (0001_7467c7b)       22,122.4090 (>1000.0)   32,973.5540 (412.01)    26,359.4216 (>1000.0)   3,763.7983 (>1000.0)   24,061.2560 (>1000.0)   7,077.2085 (>1000.0)      10;0       37.9371 (0.00)         33           1\r\ntest_deserialize_proto_request[100-500] (0002_ac3775c)       15,255.4400 (>1000.0)   18,528.7330 (231.52)    16,450.6710 (>1000.0)     731.7893 (454.46)    16,373.3630 (>1000.0)     956.3830 (>1000.0)      16;2       60.7878 (0.00)         63           1\r\ntest_deserialize_proto_request[1000-100] (0001_7467c7b)      51,576.9360 (>1000.0)   84,187.4340 (>1000.0)   59,984.9779 (>1000.0)   8,331.1790 (>1000.0)   56,792.5575 (>1000.0)  12,483.7885 (>1000.0)       3;0       16.6708 (0.00)         20           1\r\ntest_deserialize_proto_request[1000-100] (0002_ac3775c)      33,100.3810 (>1000.0)   37,188.7500 (464.68)    35,079.6140 (>1000.0)   1,019.7075 (633.26)    35,332.1615 (>1000.0)   1,445.7335 (>1000.0)       9;0       28.5066 (0.00)         28           1\r\ntest_deserialize_proto_request[1000-500] (0001_7467c7b)     251,937.1810 (>1000.0)  327,753.4200 (>1000.0)  294,796.8826 (>1000.0)  36,910.2596 (>1000.0)  314,206.2790 (>1000.0)  67,611.3500 (>1000.0)       2;0        3.3922 (0.00)          5           1\r\ntest_deserialize_proto_request[1000-500] (0002_ac3775c)     162,492.4160 (>1000.0)  172,359.1360 (>1000.0)  166,427.1273 (>1000.0)   3,162.6573 (>1000.0)  166,304.3530 (>1000.0)   3,138.3735 (>1000.0)       2;1        6.0086 (0.00)          7           1\r\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\n```\r\n\r\nSerialization performance is also improved, although not as significant\r\nas the deserialization perforamance.\r\n```\r\n---------------------------------------------------------------------------------------------------------- benchmark 'serialize-request': 24 tests ----------------------------------------------------------------------------------------------------------\r\nName (time in us)                                                  Min                     Max                    Mean                 StdDev                  Median                     IQR            Outliers           OPS            Rounds  Iterations\r\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\ntest_serialize_proto_request[1-100] (0001_7467c7b)             73.3760 (21.72)        375.7880 (3.40)          78.3862 (21.26)        13.7893 (6.41)          75.6350 (21.40)          1.6200 (18.41)     527;662   12,757.3548 (0.05)      12398           1\r\ntest_serialize_proto_request[1-100] (0002_ac3775c)            126.0540 (37.32)     39,474.1100 (357.10)       215.1010 (58.35)       715.0832 (332.39)       138.9175 (39.31)        104.4490 (>1000.0)    66;193    4,648.9797 (0.02)       6382           1\r\ntest_serialize_proto_request[1-1] (0001_7467c7b)                3.3780 (1.0)          127.6300 (1.15)           3.6866 (1.0)           2.1514 (1.0)            3.5340 (1.0)            0.0880 (1.0)      385;1818  271,249.9283 (1.0)       50267           1\r\ntest_serialize_proto_request[1-1] (0002_ac3775c)                5.8470 (1.73)       1,560.9360 (14.12)         10.7064 (2.90)         13.6365 (6.34)          10.3590 (2.93)           4.9460 (56.20)    962;1241   93,402.3626 (0.34)      26766           1\r\ntest_serialize_proto_request[100-100] (0001_7467c7b)        7,148.5460 (>1000.0)    9,444.1250 (85.44)      7,525.8909 (>1000.0)     305.5168 (142.01)     7,450.3040 (>1000.0)      228.3147 (>1000.0)     21;10      132.8746 (0.00)        133           1\r\ntest_serialize_proto_request[100-100] (0002_ac3775c)        5,871.7720 (>1000.0)    7,544.0470 (68.25)      6,234.8434 (>1000.0)     264.2215 (122.82)     6,181.4380 (>1000.0)      216.3943 (>1000.0)     17;11      160.3890 (0.00)        155           1\r\ntest_serialize_proto_request[100-500] (0001_7467c7b)       36,230.4730 (>1000.0)   39,488.9470 (357.24)    37,301.1935 (>1000.0)     745.8722 (346.70)    37,284.1360 (>1000.0)      672.7235 (>1000.0)       4;2       26.8088 (0.00)         27           1\r\ntest_serialize_proto_request[100-500] (0002_ac3775c)       30,596.9580 (>1000.0)   33,150.7000 (299.90)    31,431.9774 (>1000.0)     571.1242 (265.47)    31,389.9560 (>1000.0)      741.8257 (>1000.0)       9;1       31.8147 (0.00)         33           1\r\ntest_serialize_proto_request[1000-100] (0001_7467c7b)      72,902.3020 (>1000.0)   78,092.1620 (706.46)    74,928.3109 (>1000.0)   1,500.6398 (697.53)    75,107.4010 (>1000.0)    2,256.1870 (>1000.0)       4;0       13.3461 (0.00)         13           1\r\ntest_serialize_proto_request[1000-100] (0002_ac3775c)      63,619.4170 (>1000.0)   75,790.0490 (685.63)    65,387.8999 (>1000.0)   3,043.8494 (>1000.0)   64,336.3970 (>1000.0)    1,927.8670 (>1000.0)       1;1       15.2933 (0.00)         16           1\r\ntest_serialize_proto_request[1000-500] (0001_7467c7b)     372,581.2870 (>1000.0)  402,702.5400 (>1000.0)  380,281.0462 (>1000.0)  12,622.1482 (>1000.0)  375,547.3720 (>1000.0)    9,360.2127 (>1000.0)       1;1        2.6296 (0.00)          5           1\r\ntest_serialize_proto_request[1000-500] (0002_ac3775c)     372,103.9150 (>1000.0)  535,268.8430 (>1000.0)  444,222.4522 (>1000.0)  67,463.8563 (>1000.0)  421,689.7070 (>1000.0)  109,535.8960 (>1000.0)       2;0        2.2511 (0.00)          5           1\r\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\n\r\n```\r\n\r\n\r\n### Move `transformer_inputs` as top level field in the request\r\n\r\nThis PR extracts `transformer_inputs` from within `prediction_rows` to\r\ntop level request field to improve flexibility of passing data from\r\nclient without having to denormalize it beforehand. A new proto message\r\n`TransformerInput` is introduced to store all tables and variables that\r\nneed to be passed to standard transformer.\r\n\r\n```\r\nmessage TransformerInput {\r\n   // List of tables\r\n   // All tables must have unique name.\r\n   // Each table doesn't need to have same number of row.\r\n   repeated Table tables = 1;  \r\n   // List of variables\r\n   repeated NamedValue variables = 2;\r\n}\r\n```\r\n\r\n\r\n### Add utility package\r\n\r\n2 utility functions are added to the package to facilitate a more\r\nuser-friendly api to use `Table`:\r\n- `df_to_table` --> to convert pandas DataFrame to Table\r\n- `table_to_df` --> to convert Table into pandas DataFrame\r\n\r\nExample usage is as follow:\r\n```\r\nfrom caraml.upi.utils import df_to_table, table_to_df\r\n\r\ndf = pd.DataFrame(...)\r\ntable = df_to_table(df, \"my-table)\r\nnew_df = table_to_df(table)\r\n```\r\n\r\n\r\n### Note\r\n\r\nThe PR contains generated docs and code, thus it's better to start the\r\nreview with following source files:\r\n- table.proto\r\n- upi.proto\r\n- values.proto\r\n- utils.py  \r\n\r\n<img width=\"352\" alt=\"Screenshot 2022-09-06 at 11 26 23 AM\"\r\nsrc=\"https://user-images.githubusercontent.com/4023015/188540757-c466ab95-31a1-4fa9-af37-5b03dbb22a8e.png\">",
          "timestamp": "2022-09-12T11:51:20+08:00",
          "tree_id": "10a21c96d1d113c62d6af5f3cfb3f0386471f407",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/8fbb12ddbc0e7f88d822d36ef685ef6c56475ca3"
        },
        "date": 1662954800688,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 138212.4723166723,
            "unit": "iter/sec",
            "range": "stddev: 0.000003038381351126648",
            "extra": "mean: 7.235237046543823 usec\nrounds: 19570"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 5719.588536029043,
            "unit": "iter/sec",
            "range": "stddev: 0.00005383926817252484",
            "extra": "mean: 174.83775164957464 usec\nrounds: 5456"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 126.60000118881594,
            "unit": "iter/sec",
            "range": "stddev: 0.00020067448761732428",
            "extra": "mean: 7.898894080645093 msec\nrounds: 124"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 26.296058599794208,
            "unit": "iter/sec",
            "range": "stddev: 0.0038797625164533733",
            "extra": "mean: 38.028512760000694 msec\nrounds: 25"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 13.402760423729115,
            "unit": "iter/sec",
            "range": "stddev: 0.002857523434619866",
            "extra": "mean: 74.61149557142984 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 2.6811352464361593,
            "unit": "iter/sec",
            "range": "stddev: 0.010811735312883422",
            "extra": "mean: 372.9763358000042 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 109717.04619965993,
            "unit": "iter/sec",
            "range": "stddev: 0.000005577130709973363",
            "extra": "mean: 9.114354010043513 usec\nrounds: 24214"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 6152.325575007755,
            "unit": "iter/sec",
            "range": "stddev: 0.00004121065001916704",
            "extra": "mean: 162.54016270891833 usec\nrounds: 4843"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 131.08209448739137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002560846697137159",
            "extra": "mean: 7.628806999999445 msec\nrounds: 120"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 25.669499292623218,
            "unit": "iter/sec",
            "range": "stddev: 0.001196246492269889",
            "extra": "mean: 38.956739615383746 msec\nrounds: 26"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 12.867979675719385,
            "unit": "iter/sec",
            "range": "stddev: 0.0016100488741706133",
            "extra": "mean: 77.71227692307455 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 2.7041055297993917,
            "unit": "iter/sec",
            "range": "stddev: 0.0040778461061368385",
            "extra": "mean: 369.8080525999984 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 138151.68106438938,
            "unit": "iter/sec",
            "range": "stddev: 0.000004528722686060115",
            "extra": "mean: 7.238420787177556 usec\nrounds: 50762"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 41365.44376804125,
            "unit": "iter/sec",
            "range": "stddev: 0.000016594257715737687",
            "extra": "mean: 24.174767847470676 usec\nrounds: 31251"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 4688.461183928277,
            "unit": "iter/sec",
            "range": "stddev: 0.00015896035243233685",
            "extra": "mean: 213.28959775286856 usec\nrounds: 1335"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 1142.5722987241377,
            "unit": "iter/sec",
            "range": "stddev: 0.00012873078105165697",
            "extra": "mean: 875.2181381577847 usec\nrounds: 912"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 552.4993347341674,
            "unit": "iter/sec",
            "range": "stddev: 0.00015519862362541119",
            "extra": "mean: 1.8099569305022705 msec\nrounds: 518"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 114.52693852179837,
            "unit": "iter/sec",
            "range": "stddev: 0.0006236882759071738",
            "extra": "mean: 8.731570169490439 msec\nrounds: 118"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 109993.29389423906,
            "unit": "iter/sec",
            "range": "stddev: 0.000004709799202616968",
            "extra": "mean: 9.091463348315777 usec\nrounds: 29412"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 43505.65474444675,
            "unit": "iter/sec",
            "range": "stddev: 0.000009809598719699399",
            "extra": "mean: 22.985517764852037 usec\nrounds: 24571"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 5918.158113909371,
            "unit": "iter/sec",
            "range": "stddev: 0.00003389451382744761",
            "extra": "mean: 168.9714909187223 usec\nrounds: 3744"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1222.2576678196256,
            "unit": "iter/sec",
            "range": "stddev: 0.00026866206798280387",
            "extra": "mean: 818.1580908253912 usec\nrounds: 1079"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 616.2218854249899,
            "unit": "iter/sec",
            "range": "stddev: 0.00010894262888208497",
            "extra": "mean: 1.6227920878050763 msec\nrounds: 615"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 122.1984501430643,
            "unit": "iter/sec",
            "range": "stddev: 0.0003685590422906384",
            "extra": "mean: 8.183409845454229 msec\nrounds: 110"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 243999.5485830873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029307287347474846",
            "extra": "mean: 4.098368238003021 usec\nrounds: 59524"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 15355.991731017057,
            "unit": "iter/sec",
            "range": "stddev: 0.000047647985347467844",
            "extra": "mean: 65.12116035984398 usec\nrounds: 9672"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 446.5286570242289,
            "unit": "iter/sec",
            "range": "stddev: 0.000303456013697051",
            "extra": "mean: 2.2394979230767253 msec\nrounds: 442"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 90.69020060699064,
            "unit": "iter/sec",
            "range": "stddev: 0.00044686745635441714",
            "extra": "mean: 11.026549652630466 msec\nrounds: 95"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 42.143831338993046,
            "unit": "iter/sec",
            "range": "stddev: 0.0014132094754998115",
            "extra": "mean: 23.728265044444658 msec\nrounds: 45"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 8.673091644965933,
            "unit": "iter/sec",
            "range": "stddev: 0.006653124073056414",
            "extra": "mean: 115.29913910000289 msec\nrounds: 10"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 147694.04818886216,
            "unit": "iter/sec",
            "range": "stddev: 0.00000278760522728152",
            "extra": "mean: 6.7707535426292935 usec\nrounds: 34014"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 10461.967838483331,
            "unit": "iter/sec",
            "range": "stddev: 0.000013520749725489186",
            "extra": "mean: 95.58431219044635 usec\nrounds: 7268"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 216.67082727403508,
            "unit": "iter/sec",
            "range": "stddev: 0.002739055611434178",
            "extra": "mean: 4.615295988763854 msec\nrounds: 178"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 44.98597376700885,
            "unit": "iter/sec",
            "range": "stddev: 0.0011177537984977995",
            "extra": "mean: 22.229150916665613 msec\nrounds: 36"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 15.934477698589498,
            "unit": "iter/sec",
            "range": "stddev: 0.009197490636499484",
            "extra": "mean: 62.756998937500086 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.0852620427855704,
            "unit": "iter/sec",
            "range": "stddev: 0.01912585190815099",
            "extra": "mean: 324.1215773999983 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 232497.7634879757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022399908833093227",
            "extra": "mean: 4.301116643006839 usec\nrounds: 59172"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 96174.40659482619,
            "unit": "iter/sec",
            "range": "stddev: 0.000003674202721267128",
            "extra": "mean: 10.397776658117653 usec\nrounds: 53192"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 13337.785364446536,
            "unit": "iter/sec",
            "range": "stddev: 0.000055841137197023066",
            "extra": "mean: 74.97496568400477 usec\nrounds: 11161"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 3630.609774160114,
            "unit": "iter/sec",
            "range": "stddev: 0.000034256354234571836",
            "extra": "mean: 275.43582544101275 usec\nrounds: 3231"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 1149.2183922564832,
            "unit": "iter/sec",
            "range": "stddev: 0.00007269629905370267",
            "extra": "mean: 870.1566270937469 usec\nrounds: 1373"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 341.48363579204124,
            "unit": "iter/sec",
            "range": "stddev: 0.00015683834305088435",
            "extra": "mean: 2.928398011461334 msec\nrounds: 349"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 157390.81563610522,
            "unit": "iter/sec",
            "range": "stddev: 0.000004087921286179158",
            "extra": "mean: 6.353610888655954 usec\nrounds: 38462"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 72847.62430014605,
            "unit": "iter/sec",
            "range": "stddev: 0.000010726344340917373",
            "extra": "mean: 13.727283622590216 usec\nrounds: 38315"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 9295.69169406179,
            "unit": "iter/sec",
            "range": "stddev: 0.00003337520487095647",
            "extra": "mean: 107.57671757108868 usec\nrounds: 1087"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 1964.8520174522944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960259783719289",
            "extra": "mean: 508.9441805885412 usec\nrounds: 1700"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 651.2495617057903,
            "unit": "iter/sec",
            "range": "stddev: 0.00348122370181926",
            "extra": "mean: 1.5355096706410711 msec\nrounds: 671"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 150.37609850498671,
            "unit": "iter/sec",
            "range": "stddev: 0.006927751963498839",
            "extra": "mean: 6.649992983870628 msec\nrounds: 186"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 2168.3619759969947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006959965600155193",
            "extra": "mean: 461.177612903034 usec\nrounds: 1550"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 219.90094009816954,
            "unit": "iter/sec",
            "range": "stddev: 0.00026415388126977617",
            "extra": "mean: 4.5475021596250285 msec\nrounds: 213"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 29.292016496813417,
            "unit": "iter/sec",
            "range": "stddev: 0.0019570008334109847",
            "extra": "mean: 34.138994838705855 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 54.59661220923969,
            "unit": "iter/sec",
            "range": "stddev: 0.0010707710316915863",
            "extra": "mean: 18.316154785713326 msec\nrounds: 56"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 7.040971673805478,
            "unit": "iter/sec",
            "range": "stddev: 0.005430143174827305",
            "extra": "mean: 142.0258518750046 msec\nrounds: 8"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 28.22500670148296,
            "unit": "iter/sec",
            "range": "stddev: 0.0013855718673742897",
            "extra": "mean: 35.42957529032081 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 3.5561838513707507,
            "unit": "iter/sec",
            "range": "stddev: 0.01075959770168823",
            "extra": "mean: 281.2003096000069 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 2557.3403993260004,
            "unit": "iter/sec",
            "range": "stddev: 0.00003167893175750889",
            "extra": "mean: 391.03124490723053 usec\nrounds: 2209"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 566.4649863241955,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520837427767047",
            "extra": "mean: 1.7653341762374817 msec\nrounds: 505"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 87.40280175854093,
            "unit": "iter/sec",
            "range": "stddev: 0.000728883638747403",
            "extra": "mean: 11.441280827159305 msec\nrounds: 81"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 174.31916409766916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003364377255102482",
            "extra": "mean: 5.736603919461837 msec\nrounds: 149"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 22.183867325041906,
            "unit": "iter/sec",
            "range": "stddev: 0.0024688624814020893",
            "extra": "mean: 45.0778029523809 msec\nrounds: 21"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 88.74236641464823,
            "unit": "iter/sec",
            "range": "stddev: 0.003093370668049199",
            "extra": "mean: 11.268574869048516 msec\nrounds: 84"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 11.544909248167116,
            "unit": "iter/sec",
            "range": "stddev: 0.003090231253186621",
            "extra": "mean: 86.6182642499993 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ccbe0077c09855bf0edea8badf04c8d0d76c064",
          "message": "Rename NamedValue to Variable (#10)\n\nMinor refactoring in the UPI, no structural changes.\r\n\r\n## Changes:\r\n1. Rename `NamedValue` to `Variable` (and rename `value.proto` to\r\n`variable.proto`)\r\n3. Move `Type` to `type.proto`",
          "timestamp": "2022-09-13T12:38:35+08:00",
          "tree_id": "7c0d3c9d6ab4bc242c7bd5162762b574cea6b6c2",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/2ccbe0077c09855bf0edea8badf04c8d0d76c064"
        },
        "date": 1663044022231,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 165193.1317520657,
            "unit": "iter/sec",
            "range": "stddev: 4.052776284687213e-7",
            "extra": "mean: 6.053520442368484 usec\nrounds: 20619"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 6960.650536467384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018217072788943563",
            "extra": "mean: 143.6647328810609 usec\nrounds: 6046"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 148.83598937488995,
            "unit": "iter/sec",
            "range": "stddev: 0.000021131740774651125",
            "extra": "mean: 6.7188050699296085 msec\nrounds: 143"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 29.994629533979968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001197401737362169",
            "extra": "mean: 33.33930158621001 msec\nrounds: 29"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 14.779632454969393,
            "unit": "iter/sec",
            "range": "stddev: 0.00009978676851711325",
            "extra": "mean: 67.66068121428604 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 3.0387361160390087,
            "unit": "iter/sec",
            "range": "stddev: 0.00018976962857362317",
            "extra": "mean: 329.0841855999986 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 137313.78260813578,
            "unit": "iter/sec",
            "range": "stddev: 6.285372994207871e-7",
            "extra": "mean: 7.2825901450387285 usec\nrounds: 24272"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7797.478607501072,
            "unit": "iter/sec",
            "range": "stddev: 0.000015029965329260461",
            "extra": "mean: 128.246584612366 usec\nrounds: 5342"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 152.42264722800238,
            "unit": "iter/sec",
            "range": "stddev: 0.000051575896982461675",
            "extra": "mean: 6.560704843973374 msec\nrounds: 141"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 30.673829709087936,
            "unit": "iter/sec",
            "range": "stddev: 0.00013757458734690964",
            "extra": "mean: 32.60108077419898 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 15.188040865239111,
            "unit": "iter/sec",
            "range": "stddev: 0.00027524468350568376",
            "extra": "mean: 65.84127662499917 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.10176396882659,
            "unit": "iter/sec",
            "range": "stddev: 0.0012370097964799916",
            "extra": "mean: 322.39719400000126 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 160871.87914657814,
            "unit": "iter/sec",
            "range": "stddev: 3.4250012310187554e-7",
            "extra": "mean: 6.216126804168501 usec\nrounds: 54943"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 52656.15066231054,
            "unit": "iter/sec",
            "range": "stddev: 7.004110336814041e-7",
            "extra": "mean: 18.991133750226172 usec\nrounds: 33899"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 6628.723899058595,
            "unit": "iter/sec",
            "range": "stddev: 0.000001963244830877662",
            "extra": "mean: 150.8585989140412 usec\nrounds: 5525"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 1346.9202850206934,
            "unit": "iter/sec",
            "range": "stddev: 0.000004087795471391963",
            "extra": "mean: 742.4344344065146 usec\nrounds: 1273"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 673.5751574238611,
            "unit": "iter/sec",
            "range": "stddev: 0.000007522426070575074",
            "extra": "mean: 1.4846153231431147 msec\nrounds: 229"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 132.80579552949317,
            "unit": "iter/sec",
            "range": "stddev: 0.000011346411233802752",
            "extra": "mean: 7.529791874014433 msec\nrounds: 127"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 137395.8049469032,
            "unit": "iter/sec",
            "range": "stddev: 4.4985708228830506e-7",
            "extra": "mean: 7.278242595444973 usec\nrounds: 35586"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 52291.91291443545,
            "unit": "iter/sec",
            "range": "stddev: 6.158755763396954e-7",
            "extra": "mean: 19.123415921622268 usec\nrounds: 22372"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 6837.467574791319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025149077550963705",
            "extra": "mean: 146.25297876173406 usec\nrounds: 4473"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1491.9619565450566,
            "unit": "iter/sec",
            "range": "stddev: 0.00000588673300196903",
            "extra": "mean: 670.258377308564 usec\nrounds: 1137"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 720.2680274791222,
            "unit": "iter/sec",
            "range": "stddev: 0.000008183804582670368",
            "extra": "mean: 1.3883720529702204 msec\nrounds: 623"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 134.87553700026353,
            "unit": "iter/sec",
            "range": "stddev: 0.00005915401438023897",
            "extra": "mean: 7.414242954955174 msec\nrounds: 111"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 284434.5992037025,
            "unit": "iter/sec",
            "range": "stddev: 3.4470350248285003e-7",
            "extra": "mean: 3.5157466876377916 usec\nrounds: 82645"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 17927.631265724078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017831226256783569",
            "extra": "mean: 55.77981748832065 usec\nrounds: 13369"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 501.1175094594742,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295057708718667",
            "extra": "mean: 1.9955399305018116 msec\nrounds: 518"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 102.89716570543126,
            "unit": "iter/sec",
            "range": "stddev: 0.000047026201890192044",
            "extra": "mean: 9.718440669811535 msec\nrounds: 106"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 49.42451881924524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002257204669821141",
            "extra": "mean: 20.232872750004667 msec\nrounds: 52"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 10.01883474443314,
            "unit": "iter/sec",
            "range": "stddev: 0.00013366117099658512",
            "extra": "mean: 99.81200663636453 msec\nrounds: 11"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 179176.5534529992,
            "unit": "iter/sec",
            "range": "stddev: 4.97307802480111e-7",
            "extra": "mean: 5.581087372920786 usec\nrounds: 37174"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 12922.40278980324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017714286795101064",
            "extra": "mean: 77.38498917469715 usec\nrounds: 8591"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 255.06734311542792,
            "unit": "iter/sec",
            "range": "stddev: 0.0027649341912299222",
            "extra": "mean: 3.9205332512812547 msec\nrounds: 195"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 51.05506148568831,
            "unit": "iter/sec",
            "range": "stddev: 0.000410170883727288",
            "extra": "mean: 19.586696615384916 msec\nrounds: 39"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 17.595527354581627,
            "unit": "iter/sec",
            "range": "stddev: 0.010334355335800207",
            "extra": "mean: 56.832624555558674 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.7042931692476744,
            "unit": "iter/sec",
            "range": "stddev: 0.00037617465236651135",
            "extra": "mean: 269.9570348000009 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 294920.83624996815,
            "unit": "iter/sec",
            "range": "stddev: 2.5404285636932966e-7",
            "extra": "mean: 3.3907404194135093 usec\nrounds: 71943"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 117491.2429242751,
            "unit": "iter/sec",
            "range": "stddev: 4.6364611380397803e-7",
            "extra": "mean: 8.511272628586587 usec\nrounds: 61725"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 15468.093009413293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012171305757912906",
            "extra": "mean: 64.64921043540649 usec\nrounds: 12151"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 4215.533356097754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024961931611888485",
            "extra": "mean: 237.21790708962212 usec\nrounds: 3498"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 1399.7882451807031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056439453498238526",
            "extra": "mean: 714.3937688024427 usec\nrounds: 1436"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 384.95620924827466,
            "unit": "iter/sec",
            "range": "stddev: 0.000021327499736957793",
            "extra": "mean: 2.5976980653273665 msec\nrounds: 398"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 184233.5689933501,
            "unit": "iter/sec",
            "range": "stddev: 4.2081530793395843e-7",
            "extra": "mean: 5.427892459902869 usec\nrounds: 38023"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 85828.27136876971,
            "unit": "iter/sec",
            "range": "stddev: 5.108347925468866e-7",
            "extra": "mean: 11.651172557156608 usec\nrounds: 33444"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11652.22127179139,
            "unit": "iter/sec",
            "range": "stddev: 0.000001319679502997874",
            "extra": "mean: 85.82054671591916 usec\nrounds: 1081"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2319.695726603716,
            "unit": "iter/sec",
            "range": "stddev: 0.0009242963399904524",
            "extra": "mean: 431.09102134878157 usec\nrounds: 2061"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 677.9267669285607,
            "unit": "iter/sec",
            "range": "stddev: 0.0040615558098930195",
            "extra": "mean: 1.475085582666452 msec\nrounds: 750"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 157.49002833030548,
            "unit": "iter/sec",
            "range": "stddev: 0.007756832091816885",
            "extra": "mean: 6.349608356807769 msec\nrounds: 213"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3009.2833773209336,
            "unit": "iter/sec",
            "range": "stddev: 0.000026028711570893675",
            "extra": "mean: 332.30502901001876 usec\nrounds: 1758"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 264.92602120216566,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171896926562459",
            "extra": "mean: 3.7746386536975836 msec\nrounds: 257"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 35.063131089603026,
            "unit": "iter/sec",
            "range": "stddev: 0.000221317680089441",
            "extra": "mean: 28.519985777782452 msec\nrounds: 36"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 65.67712793950749,
            "unit": "iter/sec",
            "range": "stddev: 0.00011179742233779942",
            "extra": "mean: 15.226000761194356 msec\nrounds: 67"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 8.21814547784141,
            "unit": "iter/sec",
            "range": "stddev: 0.001664938041970652",
            "extra": "mean: 121.68195399999921 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 33.17312725373023,
            "unit": "iter/sec",
            "range": "stddev: 0.0003261584112104752",
            "extra": "mean: 30.144881799998302 msec\nrounds: 35"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 4.19782522026261,
            "unit": "iter/sec",
            "range": "stddev: 0.0016953004626227963",
            "extra": "mean: 238.2185887999981 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4148.071357353458,
            "unit": "iter/sec",
            "range": "stddev: 0.000007778186322133858",
            "extra": "mean: 241.07589138438001 usec\nrounds: 2716"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 729.985508169274,
            "unit": "iter/sec",
            "range": "stddev: 0.000015322187624560972",
            "extra": "mean: 1.369890208516459 msec\nrounds: 681"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 104.22894651909198,
            "unit": "iter/sec",
            "range": "stddev: 0.0002152635410822219",
            "extra": "mean: 9.59426371844626 msec\nrounds: 103"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 204.2792330265099,
            "unit": "iter/sec",
            "range": "stddev: 0.0001265501933304671",
            "extra": "mean: 4.895260204301958 msec\nrounds: 186"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 26.216833043881365,
            "unit": "iter/sec",
            "range": "stddev: 0.00046508061927732016",
            "extra": "mean: 38.14343243999815 msec\nrounds: 25"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 106.72410409529121,
            "unit": "iter/sec",
            "range": "stddev: 0.00009327340779237857",
            "extra": "mean: 9.369954505377022 msec\nrounds: 93"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 13.210752683214256,
            "unit": "iter/sec",
            "range": "stddev: 0.00084537761953897",
            "extra": "mean: 75.69591407691799 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8170722e755114b8d383b7ce34adde7ed650a888",
          "message": "Remove generated artifacts related to #10 (#11)\n\nFollow up to #10 to remove generated codes and docs related to\r\nNamedValue.",
          "timestamp": "2022-09-13T14:51:09+08:00",
          "tree_id": "218032a28915b77c16345bfdac0076847cd5ba04",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/8170722e755114b8d383b7ce34adde7ed650a888"
        },
        "date": 1663051982354,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 182989.52314423805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027165088328498934",
            "extra": "mean: 5.464793736916669 usec\nrounds: 22321"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 7769.212039032166,
            "unit": "iter/sec",
            "range": "stddev: 0.00000172163363717599",
            "extra": "mean: 128.71318159113767 usec\nrounds: 6812"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 168.2221083102578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011401727338890432",
            "extra": "mean: 5.944521858896607 msec\nrounds: 163"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 34.01097700572437,
            "unit": "iter/sec",
            "range": "stddev: 0.00033254286674554444",
            "extra": "mean: 29.402272090910248 msec\nrounds: 33"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 16.814889196800795,
            "unit": "iter/sec",
            "range": "stddev: 0.0007652692930249784",
            "extra": "mean: 59.47110256249921 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 3.3646750277446427,
            "unit": "iter/sec",
            "range": "stddev: 0.0028899260698251",
            "extra": "mean: 297.2055225999952 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 157913.7674687262,
            "unit": "iter/sec",
            "range": "stddev: 5.681739094327685e-7",
            "extra": "mean: 6.3325700857466 usec\nrounds: 26596"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 8850.253757638087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012480665175618125",
            "extra": "mean: 112.99111046809975 usec\nrounds: 6219"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 175.4728207419547,
            "unit": "iter/sec",
            "range": "stddev: 0.000028672891400368052",
            "extra": "mean: 5.698888270968022 msec\nrounds: 155"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 34.69546341692785,
            "unit": "iter/sec",
            "range": "stddev: 0.00019199302270083663",
            "extra": "mean: 28.822211941175624 msec\nrounds: 34"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 17.11998588330244,
            "unit": "iter/sec",
            "range": "stddev: 0.0001463078139507381",
            "extra": "mean: 58.411263117648105 msec\nrounds: 17"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.560336579323693,
            "unit": "iter/sec",
            "range": "stddev: 0.000615269622768301",
            "extra": "mean: 280.8723214000054 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 177721.16783591692,
            "unit": "iter/sec",
            "range": "stddev: 2.4769151632245794e-7",
            "extra": "mean: 5.626791744488542 usec\nrounds: 57804"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 58255.484674711464,
            "unit": "iter/sec",
            "range": "stddev: 6.226799143153076e-7",
            "extra": "mean: 17.165765688566953 usec\nrounds: 38611"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 7418.317723057284,
            "unit": "iter/sec",
            "range": "stddev: 0.000001544306083343169",
            "extra": "mean: 134.80145193725588 usec\nrounds: 6169"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 1525.7085414587762,
            "unit": "iter/sec",
            "range": "stddev: 0.000003653831063575936",
            "extra": "mean: 655.4331792911572 usec\nrounds: 1439"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 758.8739050425959,
            "unit": "iter/sec",
            "range": "stddev: 0.000005579280431946934",
            "extra": "mean: 1.3177419770994359 msec\nrounds: 262"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 150.3078495007681,
            "unit": "iter/sec",
            "range": "stddev: 0.000020492230867734313",
            "extra": "mean: 6.653012489510003 msec\nrounds: 143"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 156983.15758746234,
            "unit": "iter/sec",
            "range": "stddev: 2.7647679463599444e-7",
            "extra": "mean: 6.370110114792762 usec\nrounds: 40485"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 60373.06324206098,
            "unit": "iter/sec",
            "range": "stddev: 5.409449886856102e-7",
            "extra": "mean: 16.563678340961097 usec\nrounds: 26954"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 7865.307050168118,
            "unit": "iter/sec",
            "range": "stddev: 0.000001744281488204502",
            "extra": "mean: 127.1406181121213 usec\nrounds: 3920"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1655.6324400202482,
            "unit": "iter/sec",
            "range": "stddev: 0.000004932667778406745",
            "extra": "mean: 603.9987957639742 usec\nrounds: 1322"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 802.6590257647401,
            "unit": "iter/sec",
            "range": "stddev: 0.000008759212787529715",
            "extra": "mean: 1.2458590359053665 msec\nrounds: 752"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 153.9938668691232,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682802175607862",
            "extra": "mean: 6.4937651111124 msec\nrounds: 144"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 339127.20060953277,
            "unit": "iter/sec",
            "range": "stddev: 2.2340604074697252e-7",
            "extra": "mean: 2.9487460699190233 usec\nrounds: 86957"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 20722.755912524266,
            "unit": "iter/sec",
            "range": "stddev: 9.440068332939886e-7",
            "extra": "mean: 48.25612984205578 usec\nrounds: 15773"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 570.226617968445,
            "unit": "iter/sec",
            "range": "stddev: 0.000012287248071639295",
            "extra": "mean: 1.753688741438825 msec\nrounds: 584"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 117.09025271971409,
            "unit": "iter/sec",
            "range": "stddev: 0.00004102074349524419",
            "extra": "mean: 8.540420545455303 msec\nrounds: 121"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 57.13570768120499,
            "unit": "iter/sec",
            "range": "stddev: 0.00014647371226879545",
            "extra": "mean: 17.50218979660864 msec\nrounds: 59"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 11.264422452026992,
            "unit": "iter/sec",
            "range": "stddev: 0.00021585162985166128",
            "extra": "mean: 88.77507961538264 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 206691.91069254116,
            "unit": "iter/sec",
            "range": "stddev: 4.011723645862973e-7",
            "extra": "mean: 4.83811870841681 usec\nrounds: 41842"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 14578.642549099293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011356334649542824",
            "extra": "mean: 68.59349192711927 usec\nrounds: 9662"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 294.66477331902274,
            "unit": "iter/sec",
            "range": "stddev: 0.002234007353271482",
            "extra": "mean: 3.3936869641263048 msec\nrounds: 223"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 57.529861722131976,
            "unit": "iter/sec",
            "range": "stddev: 0.00435526710157779",
            "extra": "mean: 17.382277135133386 msec\nrounds: 37"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 20.576335615944693,
            "unit": "iter/sec",
            "range": "stddev: 0.00896363739754238",
            "extra": "mean: 48.59951833333704 msec\nrounds: 21"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 4.167447524782168,
            "unit": "iter/sec",
            "range": "stddev: 0.00045170463233822826",
            "extra": "mean: 239.9550310000052 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 334625.13444197143,
            "unit": "iter/sec",
            "range": "stddev: 2.0195694939145608e-7",
            "extra": "mean: 2.988418672337997 usec\nrounds: 85463"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 135307.2857292934,
            "unit": "iter/sec",
            "range": "stddev: 3.6429907695419255e-7",
            "extra": "mean: 7.39058502733312 usec\nrounds: 68966"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 17711.728702898774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010142347284475866",
            "extra": "mean: 56.459762724139736 usec\nrounds: 13832"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 4762.462852504516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018376798343405345",
            "extra": "mean: 209.97539108869125 usec\nrounds: 3838"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 1599.476025731836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041153012006274",
            "extra": "mean: 625.2047444990321 usec\nrounds: 1636"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 437.97750851468595,
            "unit": "iter/sec",
            "range": "stddev: 0.000021645005800191423",
            "extra": "mean: 2.283222267260486 msec\nrounds: 449"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 206931.62140580124,
            "unit": "iter/sec",
            "range": "stddev: 2.5098191356447567e-7",
            "extra": "mean: 4.832514205448377 usec\nrounds: 44842"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 96695.54016864911,
            "unit": "iter/sec",
            "range": "stddev: 3.1798559578432055e-7",
            "extra": "mean: 10.341738597828554 usec\nrounds: 38611"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 13266.722670465817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020674996696194564",
            "extra": "mean: 75.37656622808474 usec\nrounds: 989"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2589.4568218230943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007829532154999011",
            "extra": "mean: 386.18137656219153 usec\nrounds: 2321"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 817.0786319882054,
            "unit": "iter/sec",
            "range": "stddev: 0.0030741147468018814",
            "extra": "mean: 1.2238724167424258 msec\nrounds: 1099"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 181.62455023406267,
            "unit": "iter/sec",
            "range": "stddev: 0.006749288398993751",
            "extra": "mean: 5.505863599999465 msec\nrounds: 255"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3412.31114190456,
            "unit": "iter/sec",
            "range": "stddev: 0.000022622539766754287",
            "extra": "mean: 293.05651167608835 usec\nrounds: 1927"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 298.4732715957434,
            "unit": "iter/sec",
            "range": "stddev: 0.000036732922724214236",
            "extra": "mean: 3.350383753471952 msec\nrounds: 288"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 40.29202646603177,
            "unit": "iter/sec",
            "range": "stddev: 0.00012075848828442637",
            "extra": "mean: 24.818806292680534 msec\nrounds: 41"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 74.75762220304951,
            "unit": "iter/sec",
            "range": "stddev: 0.00009161552269943068",
            "extra": "mean: 13.37656242307835 msec\nrounds: 78"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 9.342944445199263,
            "unit": "iter/sec",
            "range": "stddev: 0.00035395875072952496",
            "extra": "mean: 107.03263899999271 msec\nrounds: 8"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 38.32477532157448,
            "unit": "iter/sec",
            "range": "stddev: 0.00019763978301296178",
            "extra": "mean: 26.09278180000345 msec\nrounds: 40"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 4.7817935696367755,
            "unit": "iter/sec",
            "range": "stddev: 0.0006963944322281986",
            "extra": "mean: 209.12655166667093 msec\nrounds: 6"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4618.351185349487,
            "unit": "iter/sec",
            "range": "stddev: 0.00001222382097073949",
            "extra": "mean: 216.52749214313513 usec\nrounds: 2800"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 796.0369008274109,
            "unit": "iter/sec",
            "range": "stddev: 0.000049254774496089955",
            "extra": "mean: 1.2562231712632759 msec\nrounds: 689"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 115.19501986965113,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849289307383593",
            "extra": "mean: 8.680930834783911 msec\nrounds: 115"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 226.3321270854463,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794305839475617",
            "extra": "mean: 4.4182856975601785 msec\nrounds: 205"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 29.676645871536877,
            "unit": "iter/sec",
            "range": "stddev: 0.0005949532664264055",
            "extra": "mean: 33.696530407403905 msec\nrounds: 27"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 115.89960929607439,
            "unit": "iter/sec",
            "range": "stddev: 0.0003380944145516318",
            "extra": "mean: 8.628156782180547 msec\nrounds: 101"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 14.884054633704196,
            "unit": "iter/sec",
            "range": "stddev: 0.0006673798347616286",
            "extra": "mean: 67.18599364285792 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}